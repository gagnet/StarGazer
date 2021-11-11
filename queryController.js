module.exports = (queryController) => {
    const queryController = require ("../public/queryController");
}

const User = require("pg").Pool
const user = new User({
    id: "",
    username: "",
    email: "",
    year: "",
    passHash: "",
})

const getUsers = (req, res) => {
    user.query('SELECT * FROM users ORDER BY id ASC', (err, results) => {
        if (error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}
const getUserById = (req, res) => {
    const id = parseInt(request.params.id)
    user.query('SELECT * FROM users WHERE id = $1', [id], (err, results) => {
        if (err){
            throw error
        }
        res.status(200).json(results.rows)
    })
};

const createUser = (req, res) => {
    const {username, email, year, passHash} = req.body

    user.query('INSERT INTO users (username, email, year, password_hash) VALUES $1, $2, $3, $4)', [username, email, year, passHash], (err, res) => {
        if (error) {
            throw error
        }
        res.status(201).send(`User added with ID: ${res.insertId}`)
    })
};

const updateUser = (req,res) => {
    const id = parseInt(req.params.id)
    const {username, email, year, passHash} = req.body
    user.query(
        'UPDATE users SET username = $1, email = $2, year = $3, password_hash = $4 WHERE id = $5',
        [username, email, year, passHash, id],
        (err, res) => {
            if (err) {
                throw error
            }
            res.status(200).send(`User modified with ID: ${id}`)
            }
        )
    };

const deleteUser = (req, res => {
    const id = parseInt(req.params.id)

    user.query('DELETE FROM users WHERE id = $1', [id], (err, res) => {
        if(err) {
            throw error
        }
        res.status(200).send(`User deleted with ID: ${id}`)
    })
})