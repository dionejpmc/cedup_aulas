
// Importando o estilo global
import GlobalStyle from "./styles/global";
// Importando o styled-components para estilização
import styled from "styled-components";
// Importando o componente de formulário
import Form from "./components/FormProduct.js";
// Importando o componente de grade
import Grid from "./components/GridProduct";
// Importando hooks do React
import { useEffect, useState } from "react";
// Importando o toast e o ToastContainer para notificações
import { toast, ToastContainer } from "react-toastify";
// Estilo CSS para o ToastContainer
import "react-toastify/dist/ReactToastify.css";
// Importando o axios para fazer requisições HTTP
import axios from "axios";

// Estilização do container principal
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

// Estilização do título
const Title = styled.h2``;

function AppProduct() {
  // Estado para armazenar a lista de usuários
  const [users, setUsers] = useState([]);
  // Estado para controlar a edição de usuários
  const [onEdit, setOnEdit] = useState(null);

  // Função assíncrona para obter os usuários da API
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3001/cruduser");
      // Ordenando os usuários por nome
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      // Exibindo erro em caso de falha na requisição
      toast.error(error);
    }
  };

  // Efeito que executa a função getUsers quando o componente é montado ou quando o estado setUsers é alterado
  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      {/* Container principal */}
      <Container>
        {/* Título da aplicação */}
        <Title>CADASTRO DE PRODUTOS</Title>
        {/* Componente de formulário para editar  usuários */}
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        {/* Componente de grade para exibir a lista de usuários */}
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      {/* Componente para exibir notificações */}
      <ToastContainer autoClose={3001} position={toast.POSITION.BOTTOM_LEFT} />
      {/* Estilo global */}
      <GlobalStyle />
    </>
  );
}

export default AppProduct;