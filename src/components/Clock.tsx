"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { SlidingNumber } from "./sliding-number";

const Clock = () => {
	const [hours, setHours] = useState(parseInt("00"));
	const [minutes, setMinutes] = useState(parseInt("00"));
	const [seconds, setSeconds] = useState(parseInt("00"));
	const [meridiem, setMeridiem] = useState("XX");
	const [date, setDate] = useState(format(new Date(), "eeee, dd LLLL yyyy"));

	useEffect(() => {
		const interval = setInterval(() => {
			setHours(parseInt(format(new Date(), "hh")));
			setMinutes(parseInt(format(new Date(), "mm")));
			setSeconds(parseInt(format(new Date(), "ss")));
			setMeridiem(format(new Date(), "a"));

			setDate(format(new Date(), "eeee, dd LLLL yyyy"));
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="space-y-4">
			<div className="flex items-center gap-1 font-mono text-9xl">
				<SlidingNumber
					value={hours}
					padStart={true}
				/>
				<span className="animate-pulse">:</span>

				<SlidingNumber
					value={minutes}
					padStart={true}
				/>
				<span className="animate-pulse">:</span>

				<SlidingNumber
					value={seconds}
					padStart={true}
				/>

				<span className="ms-2">{meridiem}</span>
			</div>

			<div className="text-center text-6xl">{date}</div>
		</div>
	);
};

export default Clock;
