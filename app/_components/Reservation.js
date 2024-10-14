import { getSettings, getBookedDatesByCabinId } from "@/app/_lib/data_service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
export default async function Reservation({ cabin }) {
  const [settings, dates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div>
      <DateSelector dates={dates} cabin={cabin} settings={settings} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
