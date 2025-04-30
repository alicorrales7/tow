import { useLanguage } from "../i18n/LanguageContext";
import { createSignal, For } from "solid-js";

export default function Reports() {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = createSignal("all");

  // Simulated data - in a real app this would come from an API
  const reports = [
    {
      id: 1,
      type: "towing",
      date: "2024-03-15",
      status: "resolved",
      location: "Miami Beach",
      description: "Improper towing from private parking",
    },
    {
      id: 2,
      type: "fee",
      date: "2024-03-14",
      status: "pending",
      location: "Downtown Miami",
      description: "Excessive storage fees charged",
    },
    {
      id: 3,
      type: "damage",
      date: "2024-03-13",
      status: "investigating",
      location: "Coral Gables",
      description: "Vehicle damaged during towing",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "investigating":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-4xl font-bold text-gray-900 gradient-text">
            {t("reports.title")}
          </h1>
          <p class="mt-2 text-xl text-gray-600">{t("reports.description")}</p>
        </div>
        <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button class="btn-primary">{t("reports.newReport")}</button>
        </div>
      </div>

      {/* Filters */}
      <div class="mt-8 flex space-x-4">
        <button
          class={`px-4 py-2 rounded-md ${
            selectedFilter() === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setSelectedFilter("all")}
        >
          {t("reports.filters.all")}
        </button>
        <button
          class={`px-4 py-2 rounded-md ${
            selectedFilter() === "pending"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setSelectedFilter("pending")}
        >
          {t("reports.filters.pending")}
        </button>
        <button
          class={`px-4 py-2 rounded-md ${
            selectedFilter() === "resolved"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setSelectedFilter("resolved")}
        >
          {t("reports.filters.resolved")}
        </button>
      </div>

      {/* Reports Table */}
      <div class="mt-8 flex flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      {t("reports.table.date")}
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      {t("reports.table.type")}
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      {t("reports.table.location")}
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      {t("reports.table.status")}
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      {t("reports.table.description")}
                    </th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span class="sr-only">{t("reports.table.actions")}</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <For each={reports}>
                    {(report) => (
                      <tr>
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {report.date}
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {t(`reports.types.${report.type}`)}
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {report.location}
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">
                          <span
                            class={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(
                              report.status
                            )}`}
                          >
                            {t(`reports.statuses.${report.status}`)}
                          </span>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {report.description}
                        </td>
                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button class="text-blue-600 hover:text-blue-900">
                            {t("reports.table.view")}
                          </button>
                        </td>
                      </tr>
                    )}
                  </For>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">
                    {t("reports.stats.totalReports")}
                  </dt>
                  <dd class="text-lg font-medium text-gray-900">150</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">
                    {t("reports.stats.avgResolutionTime")}
                  </dt>
                  <dd class="text-lg font-medium text-gray-900">5.2 days</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">
                    {t("reports.stats.resolutionRate")}
                  </dt>
                  <dd class="text-lg font-medium text-gray-900">92%</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
