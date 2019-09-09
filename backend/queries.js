const Pool = require('pg').Pool

const pool = new Pool({
	user: 'me',
	host: 'localhost',
	database: 'bms',
	password: 'password',
	port: 5432
})

/**
 * In index.js, we made an app.get() for the root endpoint with a function
 *  in it. Now in queries.js, we’ll create endpoints that will display all
 * users, display a single user, create a new user, update an existing user,
 *  and delete a user.
 */

const getUsers = (req, resp) => {
	pool.query('Select * From users ORDER BY id ASC',
		(err, results) => {
			if (err) {
				throw err
			}
			resp.status(200).json(results.rows)
		}
	)
}


// For our /users/:id

const getUserById = (req, resp) => {
	const id = parseInt(req.params.id)

	pool.query('SELECT * FROM users WHERE id=$1', [id], (err, results) => {
		if (err) {
			throw err
		}

		resp.status(200).json(results.rows)
	})
}


const createUser = (req, resp) => {
	const { name, email } = req.body
	console.log(name, email)

	if (!name || !email) {
		console.log("empty")
	}
	else
	pool.query(
		'INSERT into users (name,email) VALUES ($1, $2)',
		[name, email],
		(err, results) => {
			if (err) {
				throw err
			}
			resp.status(201).send(`User addedwith ID: ${results.rows}`)
		}
	)
}

const updateUser = (req, resp) => {
	const id = parseInt(req.params.id)
	const { name, email } = req.body
	
	pool.query(
		'UPDATE users SET name=$1, email=$2 WHERE id=$3',
		[name, email, id],
		(err, results) => {
			if (err) {
				throw err
			}
			resp.status(200).send(`User modified with ID: ${id}.`)
		}
	)
}

const deleteUser = (req, resp) => {
	const id = parseInt(req.params.id)

	pool.query(
		'DELETE FROM users WHERE  id=$1',
		[id],
		(err, result) => {
			if (err) {
				throw err
			}
			resp.status(200).send(`Deleted user with ID: ${id}`)
		}
	)
}

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser
}