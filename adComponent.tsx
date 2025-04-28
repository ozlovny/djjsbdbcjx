// adComponent.tsx

import { useEffect, useRef, useState } from 'react'

export default function Component() {
	const [id] = useState(6072092)
	const showAd = useRef()
	useEffect(() => {
		// Initialize the ad engine and get the SHOW method to display ads
		// @ts-expect-error admanager
		window.initCdTma?.({ id }).then(show => showAd.current = show).catch(e => console.log(e))
	}, [id])
	return (
		<>
// When the button is pressed, we activate the obtained SHOW method, which will return a Promise with the result of the ad display success.
			<button onClick={() => {
					showAd.current?.().then(() => onReward?.())
									  .catch((err: any) => onError?.(err))
				}}
			>
				Call Ad
			</button>
		</>
	)
}
