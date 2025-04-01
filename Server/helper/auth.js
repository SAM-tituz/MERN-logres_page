const bcrypt = require("bcrypt");

// const hashPassword = (password) => {
//   return new Promise((resolve, reject) => {
//     bcrypt.genSalt(12, (err, salt) => {
//       if (err) {
//         reject(err);
//       }
//       bcrypt.hash(password, salt, (err, hash) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(hash);
//       });
//     });
//   });
// };
// // or use async-await

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(12); // Generate salt
    const hash = await bcrypt.hash(password, salt); // Hash password
    return hash; // Return hashed password
  } catch (error) {
    throw error; // Handle errors
  }
};
//
const comparePassword = async (password, hashed) => {
  return await bcrypt.compare(password, hashed);
};
module.exports = {
  hashPassword,
  comparePassword,
};
