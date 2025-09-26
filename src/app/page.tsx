import { Metadata } from "next";
import Clock from "@/components/Clock";

export const metadata: Metadata = {
	title: "Home | Nextjs Starter Template",
	description: "Home page of Nextjs Starter Template",
};

const page = () => {
	return (
		<>
			<section className="grid h-[90dvh] place-items-center">
				<div className="rounded-lg p-20 backdrop-blur-sm">
					<Clock />
				</div>
			</section>
		</>
	);
};

export default page;
