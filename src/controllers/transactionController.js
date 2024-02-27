import transactionService from "../services/transactionService.js";

async function create(req, res) {
  const body = req.body;
  const id = "65dc8cbfdde15b9dc1f7b6ac";

  try {
    const transaction = await transactionService.create(body, id);
    return res.status(201).send(transaction);
  } catch (err) {
    return res.status(409).send(err.message);
  }
}

export default { create };