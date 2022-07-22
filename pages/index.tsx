import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';

interface PropList {
  value: string;
}

const Home: NextPage = () => {
  const [value, setValue] = useState<string>('');
  const [list, setList] = useState<PropList[]>([]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = () => {
    setList([...list, { value }]);
  };

  console.log(list);

  return (
    <div>
      <Head>
        <title>Kwan-ToDoList</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Title>My To Do List</Title>
        <Box>
          <div>
            <input onChange={changeHandler} />
            <button onClick={clickHandler}>Add</button>
          </div>
          <List>
            {list.map((item, index) => (
              <li key={index}>{item.value}</li>
            ))}
          </List>
        </Box>
      </Container>
    </div>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 30px;
  margin: 20px 0;
`;

const Box = styled.div`
  border: 2px solid black;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  flex-direction: column;
`;

const List = styled.div`
  padding: 20px;
`;
