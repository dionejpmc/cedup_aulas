// Importa as funções e componentes necessários para o teste
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { toast } from 'react-toastify';
import AppUser from './AppUser'; // Importa o componente a ser testado

// Mock da função toast.error
jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

// Mock da função axios.get
jest.mock('axios');

describe('AppUser', () => {
  test('renderiza a lista de usuários corretamente após a obtenção dos dados da API', async () => {
    // Dados de exemplo retornados pela API
    const usersData = [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
    ];

    // Simula a resposta da requisição à API
    axios.get.mockResolvedValue({ data: usersData });

    // Renderiza o componente
    render(<AppUser />);

    // Aguarda a obtenção dos dados e a renderização dos usuários na tela
    await waitFor(() => {
      expect(screen.getByText('Lista de Usuários')).toBeInTheDocument();
      expect(screen.getByText('User 1')).toBeInTheDocument();
      expect(screen.getByText('User 2')).toBeInTheDocument();
    });

    // Verifica se a função toast.error não foi chamada
    expect(toast.error).not.toHaveBeenCalled();
  });

  test('exibe mensagem de erro em caso de falha ao obter os dados da API', async () => {
    // Simula um erro na requisição à API
    axios.get.mockRejectedValue(new Error('Erro ao obter usuários'));

    // Renderiza o componente
    render(<AppUser />);

    // Aguarda a exibição da mensagem de erro na tela
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Erro ao obter usuários');
    });
  });
});
