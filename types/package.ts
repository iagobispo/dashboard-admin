export type Package = {
  id: string;
  name: string;
  invoiceDate: string;
  status: EventStatus;
  promoter?: string;
};

export const enum EventStatus {
  "running" = "Em Execucao",
  "cancelled" = "Cancelado",
  "completed" = "Concluido",
}
