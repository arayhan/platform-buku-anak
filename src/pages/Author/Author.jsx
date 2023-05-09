import { Fade } from '@/transitions/Fade/Fade';
import React from 'react';

export const Author = () => {
	return (
		<Fade>
			<div className="w-full max-h-[92vh] px-20 py-16 my-8 space-y-10 overflow-y-scroll bg-white bg-opacity-50 rounded-lg shadow-lg">
				<div>
					<h1 className="text-xl font-bold text-center">Author</h1>
				</div>
				<div className="grid grid-cols-2 gap-6">
					<div className="flex col-span-2 gap-6 leading-relaxed">
						<div className="space-y-3 w-80">
							<img src={require('@/images/dummy.jpeg')} alt="" className="object-cover rounded-xl" />
							<div>
								<div className="font-semibold">Maika Lestari</div>
								<div>Penulis</div>
							</div>
						</div>
						<div className="w-full">
							<p>
								Maika Lestari atau yang sering disapa Maik merupakan mahasiswa Pendidikan Guru Sekolah Dasar di
								Universitas Negeri Jakarta. Ia adalah anak sulung dari empat bersaudara yang lahir pada Mei 1999. Ia
								memiliki antusias dalam dunia anak-anak dan literasi. Hal tersebut yang menginspirasinya untuk meneliti
								dan mengembangkan buku cerita digital ini.
							</p>
						</div>
					</div>

					<div className="flex gap-6 leading-relaxed">
						<div className="space-y-3 w-80">
							<img src={require('@/images/dummy.jpeg')} alt="" className="object-cover rounded-xl" />
							<div>
								<div className="font-semibold">Satujua Creative</div>
								<div>Ilustrator</div>
							</div>
						</div>
						<div className="w-full">
							<p>
								Satujua Creative adalah sebuah tim yang terbentuk sejak 2019 dan bergerak dalam bidang digital desain
								dan konsultan brand. Beberapa karya dan project satujuacreative dapat dilihat melalui instagram{' '}
								<a
									className="font-semibold text-app-bright-navy-blue"
									href="https://www.instagram.com/‌satujuacreative/"
									rel="noreferrer"
									target="_blank"
								>
									@‌satujuacreative
								</a>
							</p>
						</div>
					</div>

					<div className="flex gap-6 leading-relaxed">
						<div className="space-y-3 w-80">
							<img src={require('@/images/dummy.jpeg')} alt="" className="object-cover rounded-xl" />
							<div>
								<div className="font-semibold">Ahmed Rayhan Primadedas</div>
								<div>Programmer</div>
							</div>
						</div>
						<div className="w-full">
							<p>
								Ahmed Rayhan Primadedas atau biasa dipanggil Rayhan merupakan mahasiswa Teknik Informatika di STT Nurul
								Fikri yang juga bekerja sebagai Programmer di PT Badr Interactive. Rayhan dapat dihubungi melalui
								instagram{' '}
								<a
									className="font-semibold text-app-bright-navy-blue"
									href="https://www.instagram.com/arayhan_/"
									rel="noreferrer"
									target="_blank"
								>
									@‌arayhan_
								</a>{' '}
								atau linkedin{' '}
								<a
									className="font-semibold text-app-bright-navy-blue"
									href="https://www.linkedin.com/in/arayhan"
									rel="noreferrer"
									target="_blank"
								>
									‌arayhan
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
};
