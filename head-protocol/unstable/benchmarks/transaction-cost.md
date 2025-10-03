--- 
sidebar_label: 'Transaction costs' 
sidebar_position: 3 
--- 

# Transaction costs 

Sizes and execution budgets for Hydra protocol transactions. Note that unlisted parameters are currently using `arbitrary` values and results are not fully deterministic and comparable to previous runs.

| Metadata | |
| :--- | :--- |
| _Generated at_ | 2025-10-03 04:16:19.355579868 UTC |
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
| 1| 5837 | 10.28 | 3.25 | 0.51 |
| 2| 6035 | 12.25 | 3.87 | 0.54 |
| 3| 6240 | 14.98 | 4.75 | 0.58 |
| 5| 6640 | 19.26 | 6.10 | 0.64 |
| 10| 7644 | 29.66 | 9.37 | 0.79 |
| 43| 14281 | 98.97 | 30.93 | 1.80 |


## `Commit` transaction costs
 This uses ada-only outputs for better comparability.

| UTxO | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :--- | ------: | --------: | --------: | --------: |
| 1| 561 | 2.44 | 1.16 | 0.20 |
| 2| 743 | 3.38 | 1.73 | 0.22 |
| 3| 920 | 4.36 | 2.33 | 0.24 |
| 5| 1283 | 6.41 | 3.60 | 0.28 |
| 10| 2183 | 12.13 | 7.25 | 0.40 |
| 54| 10062 | 98.61 | 68.52 | 1.88 |


## `CollectCom` transaction costs

| Parties | UTxO (bytes) |Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | :----------- |------: | --------: | --------: | --------: |
| 1 | 57 | 525 | 24.42 | 7.12 | 0.42 |
| 2 | 114 | 636 | 34.20 | 9.84 | 0.53 |
| 3 | 168 | 747 | 42.60 | 12.24 | 0.62 |
| 4 | 227 | 858 | 49.88 | 14.42 | 0.69 |
| 5 | 284 | 969 | 59.26 | 17.03 | 0.79 |
| 6 | 338 | 1081 | 67.85 | 19.48 | 0.89 |
| 7 | 393 | 1192 | 80.74 | 23.00 | 1.02 |
| 8 | 450 | 1303 | 93.02 | 26.50 | 1.15 |
| 9 | 506 | 1414 | 96.93 | 27.79 | 1.20 |


## Cost of Increment Transaction

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 1747 | 23.30 | 7.40 | 0.47 |
| 2| 1942 | 25.92 | 8.80 | 0.51 |
| 3| 2115 | 27.97 | 10.06 | 0.54 |
| 5| 2372 | 30.80 | 12.19 | 0.59 |
| 10| 3293 | 43.62 | 19.10 | 0.79 |
| 39| 7608 | 98.51 | 53.69 | 1.67 |


## Cost of Decrement Transaction

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 616 | 22.80 | 7.36 | 0.41 |
| 2| 744 | 24.31 | 8.47 | 0.44 |
| 3| 861 | 23.99 | 9.01 | 0.45 |
| 5| 1343 | 32.14 | 12.64 | 0.56 |
| 10| 2066 | 40.75 | 18.37 | 0.70 |
| 42| 6818 | 99.16 | 55.96 | 1.65 |


## `Close` transaction costs

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 652 | 29.09 | 8.89 | 0.48 |
| 2| 801 | 30.95 | 10.07 | 0.51 |
| 3| 916 | 32.69 | 11.22 | 0.54 |
| 5| 1269 | 34.97 | 13.23 | 0.58 |
| 10| 2093 | 45.61 | 19.58 | 0.75 |
| 35| 5824 | 96.22 | 50.43 | 1.55 |


## `Contest` transaction costs

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 674 | 33.83 | 10.16 | 0.53 |
| 2| 820 | 35.89 | 11.39 | 0.56 |
| 3| 988 | 38.66 | 12.84 | 0.60 |
| 5| 1204 | 41.86 | 15.04 | 0.65 |
| 10| 2086 | 54.63 | 21.99 | 0.84 |
| 28| 4828 | 96.95 | 45.76 | 1.48 |


## `Abort` transaction costs
There is some variation due to the random mixture of initial and already committed outputs.

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 5811 | 26.92 | 9.04 | 0.69 |
| 2| 5985 | 37.02 | 12.48 | 0.80 |
| 3| 6132 | 44.47 | 14.96 | 0.89 |
| 4| 6272 | 54.12 | 18.19 | 0.99 |
| 5| 6446 | 63.18 | 21.33 | 1.10 |
| 6| 6670 | 75.61 | 25.52 | 1.24 |
| 7| 6580 | 77.43 | 26.00 | 1.25 |
| 8| 6878 | 91.01 | 30.74 | 1.41 |


## `FanOut` transaction costs
Involves spending head output and burning head tokens. Uses ada-only UTXO for better comparability.

| Parties | UTxO  | UTxO (bytes) | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | :---- | :----------- | ------: | --------: | --------: | --------: |
| 10 | 0 | 0 | 5834 | 18.75 | 6.26 | 0.60 |
| 10 | 1 | 57 | 5868 | 21.66 | 7.37 | 0.64 |
| 10 | 5 | 285 | 6004 | 29.53 | 10.50 | 0.73 |
| 10 | 10 | 570 | 6175 | 38.18 | 14.00 | 0.83 |
| 10 | 20 | 1139 | 6513 | 59.98 | 22.53 | 1.08 |
| 10 | 30 | 1707 | 6853 | 80.67 | 30.67 | 1.32 |
| 10 | 39 | 2220 | 7159 | 99.38 | 38.04 | 1.54 |

