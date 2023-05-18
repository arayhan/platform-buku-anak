import { Fade } from '@/transitions/Fade/Fade';
import './Glossary.css';

export const Glossary = () => {
	return (
		<Fade>
			<div className="w-full max-h-[92vh] px-20 py-16 mt-16 mb-8 space-y-10 overflow-y-scroll bg-white bg-opacity-50 rounded-lg shadow-lg">
				<div>
					<h1 className="text-xl font-bold text-center">Glossary</h1>
				</div>
				<div>
					<table id="glossary" className="text-left">
						<tr>
							<th>Istimewa</th>
							<td>:</td>
							<td>lain daripada yang lainnya; luar biasa.</td>
						</tr>
						<tr>
							<th>Beranjak</th>
							<td>:</td>
							<td>berpindah; bergerak.</td>
						</tr>
						<tr>
							<th>Bergegas</th>
							<td>:</td>
							<td>cepat-cepat; terburu-buru.</td>
						</tr>
						<tr>
							<th>Panik</th>
							<td>:</td>
							<td>perasaan bingung, gugup, atau takut dengan mendadak.</td>
						</tr>
						<tr>
							<th>Kecewa</th>
							<td>:</td>
							<td>perasaan tidak puas atau tidak senang.</td>
						</tr>
						<tr>
							<th>Menuduh</th>
							<td>:</td>
							<td>Perilaku menunjuk dan mengatakan bahwa seseorang berbuat kurang baik.</td>
						</tr>
					</table>
				</div>
			</div>
		</Fade>
	);
};
