// THIS FILE IS AUTO-GENERATED BY ARTUS EXCEPTION GENERATOR
import { ArtusStdError } from '@artus/core';

export class TestError extends ArtusStdError {
  static code = 'FRAMEWORK:TEST';
  name = 'TestError';
  constructor() {
    super(TestError.code);
  }
}
