import { useEffect, useState } from 'react';
import { projectAuth, projectFirestore } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
	const [isCancelled, setIsCancelled] = useState(false)
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)
	const { dispatch, user } = useAuthContext()
  
	const logout = async () => {
	  setError(null)
	  setIsPending(true)
	  try {
		// update online status to false
		const { uid } = user
		await projectFirestore.collection('users').doc(uid).update({ online: false })
  
		// logout user
		await projectAuth.signOut()
  
		// dispatch logout function
		dispatch({ type: 'LOGOUT' })
  
		// will not update state if isCancelled true
		if (!isCancelled) {
		  setIsPending(false)
		  setError(null)
		}
	  } catch (err) {
		if (!isCancelled) {
		  console.log(err)
		  setError(error.message)
		  setIsPending(false)
		}
	  }
	}
	// clean up function
	useEffect(() => {
	  return () => setIsCancelled(true)
	}, [])
  
	return { logout, error, isPending }
  }
  