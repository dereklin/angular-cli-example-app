/// Model interface 
export interface Task {
  name: string;
  deadline: Date;
  queued: boolean;
  pomodorosRequired: number;
}
