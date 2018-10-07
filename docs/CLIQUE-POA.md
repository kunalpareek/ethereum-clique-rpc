# Clique - Proof Of Authority Consensus Mechanism

## Problem Statement

To automate the process of adding new sealers in ethereum POA network.

## Existing Solution

1. ssh into a sealer node.
2. open geth console using ipc.
3. run commands inside geth console to propose a new sealer.
4. repeat step 1 - 3 in atleast 51% of sealer nodes in the network.

## Proposed Solution

* Create a rest service that runs along side the node in the same instance and exposes some api's for all the clique commands that are not available via rpc.

## Improvements

* Simple rest api for adding sealer nodes.
* Can be used to give better UX for System Administrators.
* Reduced time and effort.
* Increased efficiency.