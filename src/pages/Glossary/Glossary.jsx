import { Fade } from '@/transitions/Fade/Fade';
import './Glossary.css';
import { Button } from '@/components/atoms/Button';
import { useNavigate } from 'react-router-dom';

export const Glossary = () => {
	const navigate = useNavigate();

	return (
		<Fade>
			<div className="w-full max-h-[92vh] px-4 md:px-10 lg:px-20 py-16 mt-28 mb-8 space-y-10 overflow-y-scroll bg-white bg-opacity-50 rounded-lg shadow-lg">
				<div>
					<h1 className="text-xl font-bold text-center">Glosarium</h1>
				</div>
				<div>
					<table id="glossary" className="text-sm text-left md:text-base lg:text-lg">
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
							<td>perilaku menunjuk dan mengatakan bahwa seseorang berbuat kurang baik.</td>
						</tr>
					</table>
				</div>
			</div>
			<div className="flex items-center justify-center">
				<Button label="Kembali" onClick={() => navigate(-1)} />
			</div>
		</Fade>
	);
};
