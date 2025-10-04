--- 
sidebar_label: 'Transaction costs' 
sidebar_position: 3 
--- 

# Transaction costs 

Sizes and execution budgets for Hydra protocol transactions. Note that unlisted parameters are currently using `arbitrary` values and results are not fully deterministic and comparable to previous runs.

| Metadata | |
| :--- | :--- |
| _Generated at_ | 2025-10-04 04:17:37.442006895 UTC |
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
| 1| 5836 | 10.48 | 3.33 | 0.52 |
| 2| 6041 | 12.44 | 3.94 | 0.54 |
| 3| 6236 | 14.50 | 4.58 | 0.57 |
| 5| 6640 | 18.41 | 5.80 | 0.63 |
| 10| 7647 | 29.19 | 9.21 | 0.79 |
| 43| 14286 | 98.97 | 30.93 | 1.80 |


## `Commit` transaction costs
 This uses ada-only outputs for better comparability.

| UTxO | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :--- | ------: | --------: | --------: | --------: |
| 1| 558 | 2.44 | 1.16 | 0.20 |
| 2| 742 | 3.38 | 1.73 | 0.22 |
| 3| 920 | 4.36 | 2.33 | 0.24 |
| 5| 1277 | 6.41 | 3.60 | 0.28 |
| 10| 2176 | 12.13 | 7.25 | 0.40 |
| 54| 10071 | 98.61 | 68.52 | 1.88 |


## `CollectCom` transaction costs

| Parties | UTxO (bytes) |Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | :----------- |------: | --------: | --------: | --------: |
| 1 | 57 | 525 | 25.20 | 7.30 | 0.43 |
| 2 | 114 | 636 | 34.19 | 9.84 | 0.53 |
| 3 | 170 | 747 | 41.31 | 11.95 | 0.60 |
| 4 | 226 | 862 | 49.55 | 14.34 | 0.69 |
| 5 | 283 | 969 | 56.24 | 16.33 | 0.77 |
| 6 | 338 | 1081 | 66.61 | 19.23 | 0.87 |
| 7 | 393 | 1192 | 84.81 | 24.02 | 1.06 |
| 8 | 451 | 1303 | 86.12 | 24.79 | 1.08 |


## Cost of Increment Transaction

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 1820 | 24.37 | 7.71 | 0.48 |
| 2| 1884 | 24.77 | 8.48 | 0.49 |
| 3| 2087 | 27.39 | 9.88 | 0.53 |
| 5| 2368 | 31.41 | 12.34 | 0.60 |
| 10| 3124 | 39.40 | 17.92 | 0.74 |
| 40| 7605 | 97.18 | 53.99 | 1.66 |


## Cost of Decrement Transaction

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 603 | 22.84 | 7.37 | 0.41 |
| 2| 847 | 25.52 | 8.81 | 0.46 |
| 3| 969 | 26.67 | 9.80 | 0.48 |
| 5| 1247 | 30.10 | 12.05 | 0.54 |
| 10| 2001 | 38.93 | 17.89 | 0.68 |
| 39| 6064 | 88.53 | 50.98 | 1.50 |


## `Close` transaction costs

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 705 | 27.54 | 8.47 | 0.46 |
| 2| 807 | 30.94 | 10.07 | 0.51 |
| 3| 920 | 32.75 | 11.24 | 0.54 |
| 5| 1316 | 35.76 | 13.47 | 0.59 |
| 10| 2013 | 45.09 | 19.41 | 0.74 |
| 36| 5976 | 97.06 | 51.37 | 1.57 |


## `Contest` transaction costs

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 672 | 33.83 | 10.15 | 0.53 |
| 2| 823 | 35.89 | 11.39 | 0.56 |
| 3| 1097 | 39.38 | 13.06 | 0.61 |
| 5| 1277 | 42.72 | 15.30 | 0.66 |
| 10| 2114 | 54.84 | 22.04 | 0.85 |
| 28| 4657 | 94.46 | 45.01 | 1.44 |


## `Abort` transaction costs
There is some variation due to the random mixture of initial and already committed outputs.

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 5783 | 26.97 | 9.05 | 0.69 |
| 2| 5891 | 32.49 | 10.87 | 0.75 |
| 3| 6087 | 44.92 | 15.08 | 0.89 |
| 4| 6270 | 55.19 | 18.59 | 1.01 |
| 5| 6433 | 63.97 | 21.59 | 1.11 |
| 6| 6661 | 72.34 | 24.47 | 1.20 |
| 7| 6795 | 85.22 | 28.74 | 1.34 |
| 8| 6818 | 91.40 | 30.84 | 1.41 |


## `FanOut` transaction costs
Involves spending head output and burning head tokens. Uses ada-only UTXO for better comparability.

| Parties | UTxO  | UTxO (bytes) | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | :---- | :----------- | ------: | --------: | --------: | --------: |
| 10 | 0 | 0 | 5834 | 18.75 | 6.26 | 0.60 |
| 10 | 1 | 57 | 5868 | 21.22 | 7.21 | 0.63 |
| 10 | 5 | 284 | 6003 | 29.79 | 10.58 | 0.73 |
| 10 | 10 | 569 | 6173 | 38.62 | 14.15 | 0.84 |
| 10 | 20 | 1137 | 6512 | 60.17 | 22.59 | 1.09 |
| 10 | 30 | 1709 | 6855 | 80.04 | 30.46 | 1.32 |
| 10 | 39 | 2221 | 7160 | 99.38 | 38.04 | 1.54 |

