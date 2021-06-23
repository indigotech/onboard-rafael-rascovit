import { useMutation } from '@apollo/client';
import { CreateUserMutation } from 'apollo-client/service';
import { Button } from 'components/button';
import { Form } from 'components/form';
import { Input } from 'components/input';
import { LoadIndicator } from 'components/loading';
import { Select } from 'components/select';
import { WrapperAddUser } from 'pages/add-user/styles';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { birthDateValidate, emailValidate, futureDateValidate, maskPhone, setRequestDate } from 'validations';

const rolesOptions = [
  {
    name: 'Selecionar',
    value: '',
  },
  {
    name: 'Administrador',
    value: 'admin',
  },
  {
    name: 'Usuário',
    value: 'user',
  },
];

export const AddUser: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [role, setRole] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [showDateError, setShowDateError] = useState(false);
  const [showFutureError, setShowFutureError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [dateError, setDateError] = useState('');
  const [futureDateError, setFutureDateError] = useState('');
  const [showCreateErrorMessage, setShowCreateErrorMessage] = useState(false);
  const [onCreateErrorMessage, setOnCreateErrorMessage] = useState('');
  const [createUser, { loading }] = useMutation(CreateUserMutation, {
    onCompleted() {
      history.push('/users-list');
    },
  });

  const formValidate = () => {
    if (!emailValidate(email)) {
      setEmailError('E-mail invalido');
      setShowEmailError(true);
    } else {
      setEmailError('');
      setShowEmailError(false);
    }
    if (!birthDateValidate(birthDate)) {
      setDateError('Data no formato invalido. Use: 31/12/2021');
      setShowDateError(true);
    } else {
      setDateError('');
      setShowDateError(false);
    }
    if (futureDateValidate(birthDate)) {
      setFutureDateError('A data está no futuro');
      setShowFutureError(true);
    } else {
      setFutureDateError('');
      setShowFutureError(false);
    }

    return emailValidate(email) && birthDateValidate(birthDate) && !futureDateValidate(birthDate);
  };

  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValidate()) {
      const newDate = setRequestDate(birthDate);
      try {
        await createUser({
          variables: {
            name,
            phone: phone.replace(/ /gm, ''),
            birthDate: newDate,
            email,
            role,
          },
        });
      } catch (error) {
        setOnCreateErrorMessage(error.message);
        setShowCreateErrorMessage(true);
      }
    }
  };

  return (
    <WrapperAddUser>
      <Button type='button' onClick={() => history.goBack()}>
        Voltar
      </Button>
      <Form title='Adicionar usuário' onSubmit={handleCreateUser}>
        <Input
          name='name'
          placeholder='ex: Rafael Torres'
          type='text'
          label='Nome'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          name='phone'
          placeholder='00 0 0000 0000'
          type='text'
          label='Telefone'
          value={phone}
          onChange={(e) => setPhone(maskPhone(e.target.value))}
          maxLength={14}
          required
        />
        <Input
          name='birthDate'
          placeholder='ex: 31/12/2021'
          type='text'
          label='Data de nascimento'
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
        {showDateError && <p className='errorMessage'>{dateError}</p>}
        {showFutureError && <p className='errorMessage'>{futureDateError}</p>}
        <Input
          name='email'
          placeholder='ex: exemplo@ex.com'
          type='text'
          label='E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {showEmailError && <p className='errorMessage'>{emailError}</p>}
        <Select
          label='Tipo: '
          options={rolesOptions}
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        ></Select>
        {!loading && <Button type='submit'>Adicionar</Button>}
        {loading && <LoadIndicator height={100} width={100} />}
        {showCreateErrorMessage && <p className='errorMessage'>{onCreateErrorMessage}</p>}
      </Form>
    </WrapperAddUser>
  );
};
