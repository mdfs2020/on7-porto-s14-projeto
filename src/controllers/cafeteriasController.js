const cafeterias = require('../models/cafeterias')

const getAll = (req, res) => {
    cafeterias.find((err, cafeteria) => {
        if (err) res.status(424).send({ message: err.message});
        res.status(201).send(cafeteria);
  });
  };

  const getPorCidade = (req, res) => {
    const parametros = req.query;

    cafeterias.find(parametros, function (err, cafeteria) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(cafeteria)
        }
    })
}

const getById = (req, res) => {
    const id = req.params.id;
  cafeterias.find({ id }, (err, cafeteria) => {
    if (err) {
      res.status(424).send({ message: err.message });
    } else if (cafeteria.length > 0) {
      res.status(200).send(cafeteria);
    } else {
      res.status(500).send('Cafeteria não encontrada');
    };
  });
};

const getPorAberto = (req, res) => {
    cafeterias.find({aberto: true}, (err, cafeteria) => {
        if(err) {
        res.status(424).send({ message: err.message});
    };
    res.status(200).send(cafeteria);
  });
};

const postCafeteria = (req, res) => {
    let cafeteria = new cafeterias(req.body);
    cafeteria.save(function (err){
      if(err) {
        res.status(424).send({ message: err.message })
      }
        res.status(201).send({
          status: 'true',
          message: 'Cafeteria incluída com sucesso'
        });
    });
  };

const deleteCafeteria = (req, res) => {
    const id = req.params.id;
    cafeterias.deleteMany({ id }, function(err) {
        if(err) {
            res.status(500).send({ menssage: err.menssage});
        } else {
            res.status(200).send({ message: "Cafeteria removida com êxito"})
        }
    })
}

const deleteCafeteriasPorDataInclusao = (req, res) => {
    const parametros = req.query
    cafeterias.deleteMany(parametros, function(err) {
        if(err) {
            res.status(500).send({ menssage: err.menssage});
        } else {
            res.status(200).send({ message: "Cafeteria removida com êxito"})
        }
    })
}

const putCafeteria = (req, res) => {
    const id = req.params.id;
    cafeterias.updateMany({ id }, { $set : req.body }, { upsert: true}, function(err) {
        if(err) {
            res.status(500).send({ menssage: err.menssage});
        } else {
            res.status(200).send({ message: "Cafeteria atualizada com êxito"})
        }
    })
}

module.exports = {
    getAll,
    getPorCidade,
    getById,
    getPorAberto,
    postCafeteria,
    deleteCafeteria,
    deleteCafeteriasPorDataInclusao,
    putCafeteria
}