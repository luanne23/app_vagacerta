import Vaga from '../models/vaga';
import api from '../services/api';  // Importa a configuração do axios


const vagaRepository = {
  findAll() {
    return api.get('/vagas')  
      .then(response => response.data['jobs'])
      .catch(error => {
        console.error('Erro ao buscar Vagas', error);
        throw error;
      });
  },

 
  findById(id: number) {
    return api.get(`/vagas/${id}`)  
      .then(response => response.data['job'])
      .catch(error => {
        console.error(`Erro ao buscar Vagas com ID ${id}`, error);
        return null;
      });
  },

  create(vaga: Vaga) {
    return api.post('/vagas', vaga)  
      .then(response => response.data['job'])
      .catch(error => {
        console.error('Erro ao criar Vagas', error);
        throw error;
      });
  },

  update(id: number, vaga: Vaga) {
    return api.put(`/vagas/${id}`, vaga)
      .then(response => response.data['job'])
      .catch(error => {
        console.error(`Erro ao atualizar Vaga com ID ${id}`, error);
        return null;
      });
  },

  remove(id: number) {
    return api.delete(`/vagas/${id}`)
      .then(response => response.data['job'])
      .catch(error => {
        console.error(`Erro ao remover Vaga com ID ${id}`, error);
        return null;
      });
  },
};

export default vagaRepository;
