export default function TimeGrid() {
  // tantas rows como horarios? intervalos de 30mins.
  // const exampleArray = [[], [], []];
  return (
    <table className="bg-blue-100 h-[700px] w-8/12">
      <tr className="grid grid-cols-7">
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miercoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
        <th>Sabado</th>
        <th>Domingo</th>
      </tr>
    </table>
  );
}
