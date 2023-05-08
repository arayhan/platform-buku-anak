import { Fade } from '@/transitions/Fade/Fade';
import React from 'react';

export const UsageInstruction = () => {
	return (
		<Fade>
			<div className="space-y-10">
				<div>
					<h1 className="text-xl font-bold text-center">PETUNJUK PENGGUNAAN BUKU DIGITAL</h1>
				</div>
				<div className="space-y-6 overflow-y-scroll">
					<div className="space-y-3 leading-relaxed">
						<h2 className="font-semibold">Bagi Orang Tua dan Pendidik</h2>
						<p>
							Buku digital “Pensil Baru Habil” adalah bahan bacaan pendukung dalam pembelajaran membaca nyaring.
							Penggunaan buku digital ini membutuhkan perangkat elektronik serta tersedianya jaringan internet.
							Penggunaan buku digital dalam kegiatan pembelajaran dapat dilaksanakan secara mandiri ataupun bersama-sama
							di dalam kelas.
						</p>
						<p>
							Penggunaan buku digital secara mandiri dapat melalui perangkat elektronik seperti, smartphone, laptop,
							atau komputer.
						</p>
						<p>
							Sedangkan penggunaan secara bersama di dalam kelas dapat melalui perangkat elektronik berupa laptop yang
							disambungkan dengan alat proyeksi (proyektor) dan pengeras suara (speaker).
						</p>
						<p>
							Selama menggunakan buku digital ini, orang tua dan pendidik harus selalu mendampingi dan mengawasi anak.
							Bahan bacaan pendukung digital ini akan menjadi lebih bermakna, apabila anak berada dekat dengan orang tua
							atau pendidik agar dapat bertanya dan berdiskusi seputar bahan bacaan.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="font-semibold">Bagi Anak</h2>
						<ul className="space-y-2 list-disc list-inside">
							<li>Mulai membaca dengan menekan tombol “start”</li>
							<li>
								Tampilan mode baca akan muncul. Kamu dapat memilih ingin membaca sendiri atau mendengarkan bacaan dari
								narator.
							</li>
							<li className="space-y-2">
								<span>Tampilan buku akan terbuka dan terdapat tombol fungsi sebagai berikut:</span>
								<ol className="ml-8 space-y-1 list-decimal list-inside">
									<li className="list-item">Beranda – tombol untuk kembali pada tampilan awal</li>
									<li className="list-item">Suara – tombol untuk mengaktifkan atau menonaktifkan musik latar</li>
									<li className="list-item">Previous – tombol untuk kembali ke halaman buku sebelumnya</li>
									<li className="list-item">Next – tombol untuk beralih ke halaman buku selanjutnya</li>
									<li className="list-item">Jeda – tombol untuk menghentikan bacaan sejenak</li>
									<li className="list-item">Play – tombol untuk memulai bacaan</li>
								</ol>
							</li>
							<li>Selamat Membaca.</li>
						</ul>
					</div>
				</div>
			</div>
		</Fade>
	);
};
