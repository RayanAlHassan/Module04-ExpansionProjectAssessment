// // Import necessary modules and models
import db from "../models/index.js";
import sequelize from 'sequelize'

const { ProductModel, UserModel } = db;
    //  title: DataTypes.STRING,
    //   category: DataTypes.STRING,
    //   description: DataTypes.STRING,
    //   price: DataTypes.INTEGER,
    //   supplier: DataTypes.STRING,
    //   userId: DataTypes.INTEGER,
///// add transaction
export const addProduct = async (req, res) => {
  try {
    // Destructure data from request body
    const { title, category, description,price,supplier } = req.body;
        const userId = req.user?.id;


    // Create a new transaction record
    const newProduct = await TransactionModel.create({
      title,
      category,
      description,
      price,
      supplier,
      userId,
    });

    // Respond with a success message
    res.status(201).json({
      message: "Product added  successfully",
      product: newProduct,
    });
  } catch (error) {

    // Respond with an error message
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//////// Function to fetch all Transaction with their authors and categories
export const getAllProducts = async (req, res) => {
  try {
    // pagination
    const { page = 1, pageSize = 5 } = req.query;
    const offset = (page - 1) * pageSize;

    const getAllProducts = await ProductModel.findAll({
      include: [UserModel],
      //pagination
      offset,
      limit: parseInt(pageSize),
    });
    res.status(200).json(getAllProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete transaction
export const deleteProduct = async (req, res) => {
  const id  = req.body.id;

  try {
    const deleteProduct = await TransactionModel.findByPk(id);
    if (!deleteProduct) {
      return res.status(404).json({ message: "product not found" });
    }

    await deleteProduct.destroy();
    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//update transaction
export const updateProduct = async (req, res) => {
    const { title, category, description, price, supplier } = req.body;
    const userId = req.user?.id;
  try {
    const updateProduct = await TransactionModel.findByPk(id);
    if (!updateProduct) {
      return res.status(404).json({ message: "product not found" });
    }

    await updateProduct.update({
      title,
      category,
      description,
      price,
      supplier,
      userId
      
    });
    res.status(200).json({ message: "product updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//// // // // get transaction by  categoryID
export const getTransactionsByCategory = async (req, res) => {
  const categoryId = req.body.categoryId;

  try {
    const { page = 1, pageSize = 5 } = req.query;
    const offset = (page - 1) * pageSize;

    const transactions = await TransactionModel.findAll({
      where: { categoryId: categoryId },
      include: [UserModel, CategoryModel],
      offset,
      limit: parseInt(pageSize),
    });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//// // // // get transaction by  category Type
export const getTransByType = async (req, res) => {
  const  type  = req.body.type;

  try {
    const { page = 1, pageSize = 5 } = req.query;
    const offset = (page - 1) * pageSize;

    const transactions = await TransactionModel.findAll({
      where: { type: type },
      include: [UserModel, CategoryModel],

      offset,
      limit: parseInt(pageSize),
    });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get transaction between specific start and end date for report
export const getTransactionsByDate = async (req, res) => {
  try {
    const { startDate, endDate } = req.body;
    if (!startDate || !endDate) {
      return res.status(400).json({
        error: 'Please provide start and end date',
      });
    }

    const transactions = await TransactionModel.findAll({
      where: {
        date: {
          [sequelize.Op.between]: [startDate, endDate],
        },
      },
    });

    const incomeTransactions = transactions.filter(
      (transaction) => transaction.type === 'Income'
    );
    const outcomeTransactions = transactions.filter(
      (transaction) => transaction.type === 'Outcome'
    );

    const sumIncome = incomeTransactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );
    const sumOutcome = outcomeTransactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    ) 

    return res.status(200).json({
      incomeTransactions,
      outcomeTransactions,
      sumIncome,
      sumOutcome,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      msg: 'Failed',
      error: error,
    });
  }
};