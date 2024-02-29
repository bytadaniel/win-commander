interface CommandResponse {
  error: Error | null;
  stdout: string;
  stderr: string;
}
