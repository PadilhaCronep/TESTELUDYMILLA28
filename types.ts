
// Fix: Added React import to resolve the 'Cannot find namespace React' error when referencing React.ReactNode
import React from 'react';

export interface Proposal {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CredibilityItem {
  title: string;
  description: string;
}
