import ReactApexChart from "react-apexcharts";

// Mesmas situações e cores dos badges do TodoItem
const situacoes = [
  { valor: "pendente", label: "Pendente", cor: "#EAB308" },
  { valor: "em andamento", label: "Em andamento", cor: "#3B82F6" },
  { valor: "concluida", label: "Concluída", cor: "#22C55E" },
  { valor: "cancelada", label: "Cancelada", cor: "#9CA3AF" },
];

export default function TarefaSituacao({ tarefas }) {
  // Conta quantas tarefas existem em cada situação
  const quantidades = situacoes.map(
    (s) => tarefas.filter((t) => t.situacao === s.valor).length,
  );

  const series = [{ name: "Tarefas", data: quantidades }];

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    colors: situacoes.map((s) => s.cor),
    plotOptions: {
      bar: {
        distributed: true, // Uma cor para cada barra
        borderRadius: 4,
        borderRadiusApplication: "end",
        columnWidth: "50%",
      },
    },
    legend: { show: false },
    xaxis: {
      categories: situacoes.map((s) => s.label),
    },
    yaxis: {
      stepSize: 1, // Quantidade de tarefas é sempre inteira
    },
  };

  return (
    <div className="p-4 mb-4 border border-gray-200 rounded-lg bg-white">
      <h2 className="text-sm font-medium text-gray-700">
        Tarefas por situação
      </h2>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={250}
      />
    </div>
  );
}
