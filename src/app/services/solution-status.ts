export interface SolutionState {
  status: SolutionStatus;
  id: string;
}

export enum SolutionStatus {
  success = <any>'success',
  running = <any>'running',
  failed = <any>'failed'
}
