import { ethers } from 'ethers';
import { contractDetails } from './contractDetails';
import Swal from 'sweetalert2';

const writeContractFunction = async (token) => {
	const mProviderInner = getMetaMask()
	const signer = await mProviderInner.getSigner()
	const chainId = await getChainId();
	console.log("chain id", chainId)
	return new ethers.Contract(
		contractDetails[token].address[chainId],
		contractDetails[token].abi,
		signer
	)
}

const readContractFunction = async (token) => {
	const chainId = await getChainId()
	return new ethers.Contract(
		contractDetails[token].address[chainId],
		contractDetails[token].abi,
		//provider
	)
}

const verifyTransaction = (hash, initValue) => {
	Swal.fire({
		title: 'Sent to Blockchain',
		html: `<p>Waiting for Blockchain Confirmation...</p>
		<p><a target='_blank' href='https://rinkeby.etherscan.io/tx/${hash}'>View On Ether Scan</a> </p>`
	})
	// check transaction
	const mProviderInner = getMetaMask()
	mProviderInner.waitForTransaction(hash).then(async (result) => {
		if (result.status) {
			initValue && initValue()
			Swal.fire({
				icon: 'success',
				html: `<p>Transaction Successful</p>
		<p><a target='_blank' href='https://rinkeby.etherscan.io/tx/${hash}'>View On Ether Scan</a> </p>`
			})


		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				html: `<p>Transaction failed!</p>
		<p><a target='_blank' href='https://rinkeby.etherscan.io/tx/${hash}'>View On Ether Scan</a> </p>`
			})
		}
	})
}


export { writeContractFunction, readContractFunction, verifyTransaction };