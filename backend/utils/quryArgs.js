const db = require("../db/models");

const listingQueryArgs = {
    include: [
      { model: db.OpalType, attributes: ["id", "name"] },
      { model: db.Cut, attributes: ["id", "name"] },
      { model: db.Dome, attributes: ["id", "name"] },
      { model: db.Origin, attributes: ["id", "name"] },
      { model: db.BodyTone, attributes: ["id", "name"] },
      { model: db.Brightness, attributes: ["id", "name"] },
      {
        model: db.Color,
        through: { attributes: [] },
        attributes: ["id", "name", "description"],
      },
      {
        model: db.Pattern,
        through: { attributes: [] },
        attributes: ["id", "name", "description"],
      },
      {
        model: db.Transaction,
      },
      // {model: db.Link}
    ],
    attributes: {
      exclude: [
        "bodyTone",
        "cut",
        "dome",
        "origin",
        "bodyTone",
        "brightness",
        "type",
        "createdAt",
        "updatedAt",
      ],
    },
  };

  module.exports = {
    listingQueryArgs
  }