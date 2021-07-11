export type DifferentialEquation = FirstOrderODE | SecondOrderODE | HeatEquation | WaveEquation;

export interface FirstOrderODE {
  samples: number;
  time_period: number;
  initial_value: number;
  source: string;
}

export interface SecondOrderODE {
  samples: number;
  time_period: number;
  initial_value: number;
  initial_derivative: number;
  source: string;
}

export enum BoundaryType {
  dirichlet = 'dirichlet',
  neumann = 'neumann'
}

export interface BoundaryCondition {
  type: BoundaryType;
  function: string;
}

export interface Boundary {
  left_condition: BoundaryCondition;
  right_condition: BoundaryCondition;
}

export interface HeatEquation {
  alpha: number;
  length: number;
  time_period: number;
  samples: number;
  boundary: Boundary;
  initial_condition: string;
}

export interface WaveEquation {
  c: number;
  length: number;
  time_period: number;
  samples: number;
  boundary: Boundary;
  initial_condition: string;
}

export enum EquationType {
  firstOrderODE = "first_order_ode",
  secondOrderODE = "second_order_ode",
  heatEquation = "heat_equation",
  waveEquation = "wave_equation",
}
