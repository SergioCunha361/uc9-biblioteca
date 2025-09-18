const { Autor } = require("../../index");
class AutorController {
  static async criar(req, res) {
    try {
      const { cod_autor, nome_autor, titulo_livro, genero, ano_publicacao } = req.body;
      if (cod_autor && nome_autor && titulo_livro && genero && ano_publicacao) {
        const autor = await Autor.create({ cod_autor, nome_autor, titulo_livro, genero, ano_publicacao });
        res
          .status(201)
          .json({ mensagem: "Autor cadastrado com sucesso", nome_autor });
      } else {
        res
          .status(400)
          .json({ mensagem: "Todos os campos devem ser preenchidos" });
      }
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  static async listar(req, res) {
    try {
      const autores = await Autor.findAll();

      if (autores.length > 0) {
        return res.status(200).json(autores);
      }
      res.status(200).json({ mensagem: "Nenhum  encontrado" });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
  static async atualizar(req, res) {
    try {
      const cod_autor = req.params.cod_autor;
      const { nome_autor, titulo_livro, genero, ano_publicacao } = req.body;
       if (!cod_autor) {
        return res.status(400).json({ mensagem: "cod_autor é obrigatório na URL" });
      }
      if (cod_curso && nome) {
        const [atualizado] = await Curso.update(
          { nome },
          { where: { cod_curso: cod_curso } }
        );
        if (atualizado === 0) {
          return res
            .status(404)
            .json({ mensagem: "Curso não encontrado ou não alterado" });
        }
        const curso = await Curso.findByPk(cod_curso);
        return res
          .status(200)
          .json({ mensagem: "Curso atualizado com sucesso", nome: curso.nome });
      } else {
        return res
          .status(400)
          .json({ mensagem: "Todos os campos devem ser preenchidos" });
      }
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

static async atualizar(req, res) {
    try {
      const { cod_autor } = req.pa

            // Monta só os campos enviados (parcial)
      const dados = {};
      if (typeof nome_autor !== 'undefined') dados.nome_autor = nome_autor;
      if (typeof titulo_livro !== 'undefined') dados.titulo_livro = titulo_livro;
      if (typeof genero !== 'undefined') dados.genero = genero;
      if (typeof ano_publicacao !== 'undefined') dados.ano_publicacao = ano_publicacao;

      if (Object.keys(dados).length === 0) {
        return res.status(400).json({ mensagem: "Nada para atualizar" });
      }

      const [qtde] = await AutorModel.update(dados, { where: { cod_autor } });

      if (qtde === 0) {
        return res.status(404).json({ mensagem: "Autor não encontrado ou não alterado" });
      }

      const autor = await AutorModel.findByPk(cod_autor);
      return res.status(200).json({
        mensagem: "Autor atualizado com sucesso",
        autor: {
          cod_autor: autor.cod_autor,
          nome_autor: autor.nome_autor,
          titulo_livro: autor.titulo_livro,
          genero: autor.genero,
          ano_publicacao: autor.ano_publicacao,
          atualizado_em: autor.atualizado_em
        }
      });
    } catch (error) {
      // ENUM inválido, validação, etc., caem aqui
      return res.status(500).json({ erro: error.message });
    }
  }






  static async deletar(req, res) {
    try {
      const { cod_autor } = req.params;
      const autor = await Curso.findByPk(cod_autor);

      if (!autor) {
        return res.status(404).json({ mensagem: "Autor não encontrado." });
      }

      await autor.destroy();
      res.status(200).json({ mensagem: "Autor deletado com sucesso!", Autor: nome_autor });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
}
module.exports = AutorController;
