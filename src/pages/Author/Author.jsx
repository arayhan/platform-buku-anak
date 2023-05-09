import { Fade } from '@/transitions/Fade/Fade';
import React from 'react';

export const Author = () => {
	return (
		<Fade>
			<div className="w-full max-h-[92vh] px-20 py-16 my-8 space-y-10 overflow-y-scroll bg-white bg-opacity-50 rounded-lg shadow-lg">
				<div>
					<h1 className="text-xl font-bold text-center">Author</h1>
				</div>
				<div className="space-y-10">
					<div className="flex gap-6 leading-relaxed">
						<div className="w-4/12 space-y-3">
							<img src={require('@/images/dummy.jpeg')} alt="" className="object-cover rounded-xl" />
							<div>
								<div className="font-semibold">Maika Lestari</div>
								<div>Author</div>
							</div>
						</div>
						<div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo incidunt corporis eligendi voluptates,
								magnam adipisci quis est ab eius quos pariatur debitis in voluptatibus, voluptatem, sunt iusto soluta
								facere tempore?
							</p>
						</div>
					</div>

					<hr />

					<div className="flex flex-row-reverse gap-6 leading-relaxed">
						<div className="w-4/12 space-y-3">
							<img src={require('@/images/dummy.jpeg')} alt="" className="object-cover rounded-xl" />
							<div>
								<div className="font-semibold">Maika Lestari</div>
								<div>Author</div>
							</div>
						</div>
						<div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo incidunt corporis eligendi voluptates,
								magnam adipisci quis est ab eius quos pariatur debitis in voluptatibus, voluptatem, sunt iusto soluta
								facere tempore?
							</p>
						</div>
					</div>

					<hr />

					<div className="flex gap-6 leading-relaxed">
						<div className="w-4/12 space-y-3">
							<img src={require('@/images/dummy.jpeg')} alt="" className="object-cover rounded-xl" />
							<div>
								<div className="font-semibold">Maika Lestari</div>
								<div>Author</div>
							</div>
						</div>
						<div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo incidunt corporis eligendi voluptates,
								magnam adipisci quis est ab eius quos pariatur debitis in voluptatibus, voluptatem, sunt iusto soluta
								facere tempore?
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
};
