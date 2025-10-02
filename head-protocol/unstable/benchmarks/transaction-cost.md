--- 
sidebar_label: 'Transaction costs' 
sidebar_position: 3 
--- 

# Transaction costs 

Sizes and execution budgets for Hydra protocol transactions. Note that unlisted parameters are currently using `arbitrary` values and results are not fully deterministic and comparable to previous runs.

| Metadata | |
| :--- | :--- |
| _Generated at_ | 2025-10-02 04:19:07.943722817 UTC |
| _Max. memory units_ | 14000000 |
| _Max. CPU units_ | 10000000000 |
| _Max. tx size (kB)_ | 16384 |

## Script summary

| Name   | Hash | Size (Bytes) 
| :----- | :--- | -----------: 
| νInitial | c8a101a5c8ac4816b0dceb59ce31fc2258e387de828f02961d2f2045 | 2652 | 
| νCommit | 61458bc2f297fff3cc5df6ac7ab57cefd87763b0b7bd722146a1035c | 685 | 
| νHead | a1442faf26d4ec409e2f62a685c1d4893f8d6bcbaf7bcb59d6fa1340 | 14599 | 
| μHead | fd173b993e12103cd734ca6710d364e17120a5eb37a224c64ab2b188* | 5284 | 
| νDeposit | ae01dade3a9c346d5c93ae3ce339412b90a0b8f83f94ec6baa24e30c | 1102 | 

* The minting policy hash is only usable for comparison. As the script is parameterized, the actual script is unique per head.

## `Init` transaction costs

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 5836 | 10.66 | 3.39 | 0.52 |
| 2| 6035 | 13.01 | 4.14 | 0.55 |
| 3| 6238 | 14.71 | 4.65 | 0.58 |
| 5| 6641 | 19.19 | 6.08 | 0.64 |
| 10| 7646 | 29.12 | 9.18 | 0.79 |
| 43| 14282 | 98.78 | 30.87 | 1.80 |


## `Commit` transaction costs
 This uses ada-only outputs for better comparability.

| UTxO | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :--- | ------: | --------: | --------: | --------: |
| 1| 561 | 2.44 | 1.16 | 0.20 |
| 2| 743 | 3.38 | 1.73 | 0.22 |
| 3| 917 | 4.36 | 2.33 | 0.24 |
| 5| 1283 | 6.41 | 3.60 | 0.28 |
| 10| 2167 | 12.13 | 7.25 | 0.40 |
| 54| 10052 | 98.61 | 68.52 | 1.88 |


## `CollectCom` transaction costs

| Parties | UTxO (bytes) |Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | :----------- |------: | --------: | --------: | --------: |
| 1 | 57 | 525 | 24.42 | 7.12 | 0.42 |
| 2 | 114 | 636 | 33.32 | 9.64 | 0.52 |
| 3 | 170 | 747 | 42.60 | 12.24 | 0.62 |
| 4 | 226 | 858 | 48.15 | 13.95 | 0.68 |
| 5 | 284 | 969 | 56.35 | 16.33 | 0.77 |
| 6 | 339 | 1081 | 71.40 | 20.29 | 0.92 |
| 7 | 395 | 1192 | 78.01 | 22.26 | 0.99 |
| 8 | 451 | 1303 | 89.14 | 25.46 | 1.11 |
| 9 | 506 | 1414 | 93.53 | 26.86 | 1.16 |


## Cost of Increment Transaction

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 1795 | 24.00 | 7.62 | 0.48 |
| 2| 1984 | 26.47 | 8.98 | 0.52 |
| 3| 2125 | 27.93 | 10.05 | 0.54 |
| 5| 2384 | 31.41 | 12.34 | 0.60 |
| 10| 3171 | 40.99 | 18.35 | 0.75 |
| 41| 7734 | 99.23 | 55.21 | 1.69 |


## Cost of Decrement Transaction

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 631 | 22.81 | 7.37 | 0.42 |
| 2| 790 | 23.98 | 8.38 | 0.44 |
| 3| 952 | 26.71 | 9.80 | 0.48 |
| 5| 1240 | 29.98 | 12.03 | 0.53 |
| 10| 2007 | 40.73 | 18.36 | 0.70 |
| 41| 6742 | 99.82 | 55.46 | 1.65 |


## `Close` transaction costs

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 643 | 29.17 | 8.91 | 0.48 |
| 2| 854 | 29.90 | 9.82 | 0.50 |
| 3| 957 | 33.36 | 11.43 | 0.54 |
| 5| 1214 | 34.18 | 13.00 | 0.57 |
| 10| 2224 | 47.08 | 20.03 | 0.77 |
| 36| 5903 | 97.61 | 51.49 | 1.57 |


## `Contest` transaction costs

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 671 | 33.87 | 10.16 | 0.53 |
| 2| 807 | 35.85 | 11.38 | 0.56 |
| 3| 958 | 37.95 | 12.63 | 0.59 |
| 5| 1158 | 41.11 | 14.82 | 0.64 |
| 10| 1945 | 52.53 | 21.35 | 0.81 |
| 28| 4900 | 97.85 | 46.06 | 1.49 |


## `Abort` transaction costs
There is some variation due to the random mixture of initial and already committed outputs.

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 5697 | 22.93 | 7.56 | 0.64 |
| 2| 5982 | 35.95 | 12.08 | 0.79 |
| 3| 5952 | 40.33 | 13.47 | 0.84 |
| 4| 6250 | 53.24 | 17.91 | 0.98 |
| 5| 6461 | 65.68 | 22.12 | 1.12 |
| 6| 6677 | 75.01 | 25.33 | 1.23 |
| 7| 6727 | 82.19 | 27.61 | 1.31 |
| 8| 6897 | 90.61 | 30.54 | 1.41 |


## `FanOut` transaction costs
Involves spending head output and burning head tokens. Uses ada-only UTXO for better comparability.

| Parties | UTxO  | UTxO (bytes) | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | :---- | :----------- | ------: | --------: | --------: | --------: |
| 10 | 0 | 0 | 5834 | 19.19 | 6.41 | 0.61 |
| 10 | 1 | 57 | 5868 | 21.66 | 7.37 | 0.64 |
| 10 | 5 | 285 | 6004 | 29.09 | 10.34 | 0.72 |
| 10 | 10 | 568 | 6172 | 39.51 | 14.45 | 0.85 |
| 10 | 20 | 1139 | 6514 | 59.54 | 22.38 | 1.08 |
| 10 | 30 | 1706 | 6852 | 80.04 | 30.46 | 1.32 |
| 10 | 39 | 2221 | 7160 | 97.61 | 37.43 | 1.52 |

