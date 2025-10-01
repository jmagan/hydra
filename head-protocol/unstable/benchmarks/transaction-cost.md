--- 
sidebar_label: 'Transaction costs' 
sidebar_position: 3 
--- 

# Transaction costs 

Sizes and execution budgets for Hydra protocol transactions. Note that unlisted parameters are currently using `arbitrary` values and results are not fully deterministic and comparable to previous runs.

| Metadata | |
| :--- | :--- |
| _Generated at_ | 2025-10-01 05:46:47.574096925 UTC |
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
| 1| 5840 | 11.04 | 3.52 | 0.52 |
| 2| 6038 | 12.63 | 4.00 | 0.55 |
| 3| 6238 | 14.72 | 4.66 | 0.58 |
| 5| 6638 | 19.17 | 6.07 | 0.64 |
| 10| 7650 | 28.71 | 9.03 | 0.78 |
| 43| 14282 | 98.73 | 30.85 | 1.80 |


## `Commit` transaction costs
 This uses ada-only outputs for better comparability.

| UTxO | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :--- | ------: | --------: | --------: | --------: |
| 1| 558 | 2.44 | 1.16 | 0.20 |
| 2| 740 | 3.38 | 1.73 | 0.22 |
| 3| 923 | 4.36 | 2.33 | 0.24 |
| 5| 1277 | 6.41 | 3.60 | 0.28 |
| 10| 2180 | 12.13 | 7.25 | 0.40 |
| 54| 10064 | 98.61 | 68.52 | 1.88 |


## `CollectCom` transaction costs

| Parties | UTxO (bytes) |Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | :----------- |------: | --------: | --------: | --------: |
| 1 | 57 | 525 | 25.20 | 7.30 | 0.43 |
| 2 | 112 | 635 | 33.40 | 9.67 | 0.52 |
| 3 | 170 | 747 | 43.67 | 12.53 | 0.63 |
| 4 | 226 | 858 | 48.02 | 13.94 | 0.68 |
| 5 | 282 | 969 | 56.48 | 16.43 | 0.77 |
| 6 | 338 | 1081 | 63.53 | 18.44 | 0.84 |
| 7 | 393 | 1192 | 86.75 | 24.44 | 1.08 |
| 8 | 450 | 1303 | 94.52 | 26.75 | 1.16 |
| 9 | 505 | 1414 | 97.02 | 27.82 | 1.20 |


## Cost of Increment Transaction

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 1797 | 24.00 | 7.62 | 0.48 |
| 2| 1882 | 24.44 | 8.41 | 0.49 |
| 3| 2065 | 27.02 | 9.79 | 0.53 |
| 5| 2322 | 30.38 | 12.05 | 0.58 |
| 10| 3189 | 41.77 | 18.58 | 0.76 |
| 40| 7863 | 99.90 | 54.75 | 1.70 |


## Cost of Decrement Transaction

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 631 | 22.84 | 7.38 | 0.42 |
| 2| 722 | 22.60 | 7.95 | 0.42 |
| 3| 895 | 25.82 | 9.55 | 0.47 |
| 5| 1207 | 29.03 | 11.75 | 0.52 |
| 10| 1981 | 39.30 | 17.99 | 0.68 |
| 40| 6485 | 96.07 | 53.78 | 1.60 |


## `Close` transaction costs

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 639 | 26.83 | 8.26 | 0.45 |
| 2| 847 | 31.54 | 10.26 | 0.52 |
| 3| 944 | 32.80 | 11.25 | 0.54 |
| 5| 1267 | 37.70 | 13.98 | 0.61 |
| 10| 2012 | 47.32 | 20.01 | 0.77 |
| 34| 5747 | 92.58 | 48.77 | 1.50 |


## `Contest` transaction costs

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 685 | 33.87 | 10.16 | 0.53 |
| 2| 810 | 35.85 | 11.38 | 0.56 |
| 3| 959 | 37.91 | 12.62 | 0.59 |
| 5| 1387 | 44.29 | 15.78 | 0.68 |
| 10| 2178 | 56.43 | 22.51 | 0.86 |
| 28| 4637 | 95.23 | 45.22 | 1.45 |


## `Abort` transaction costs
There is some variation due to the random mixture of initial and already committed outputs.

| Parties | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | ------: | --------: | --------: | --------: |
| 1| 5793 | 27.09 | 9.09 | 0.69 |
| 2| 5820 | 31.67 | 10.53 | 0.74 |
| 3| 6195 | 46.82 | 15.89 | 0.92 |
| 4| 6286 | 56.35 | 18.99 | 1.02 |
| 5| 6506 | 65.69 | 22.15 | 1.13 |
| 6| 6641 | 74.27 | 25.02 | 1.22 |
| 7| 6582 | 75.87 | 25.50 | 1.24 |
| 8| 6839 | 86.64 | 29.18 | 1.36 |
| 10| 6895 | 98.73 | 33.11 | 1.49 |


## `FanOut` transaction costs
Involves spending head output and burning head tokens. Uses ada-only UTXO for better comparability.

| Parties | UTxO  | UTxO (bytes) | Tx size | % max Mem | % max CPU | Min fee ₳ |
| :------ | :---- | :----------- | ------: | --------: | --------: | --------: |
| 10 | 0 | 0 | 5834 | 19.19 | 6.41 | 0.61 |
| 10 | 1 | 57 | 5868 | 20.34 | 6.91 | 0.62 |
| 10 | 5 | 285 | 6004 | 28.90 | 10.28 | 0.72 |
| 10 | 20 | 1138 | 6513 | 60.87 | 22.83 | 1.09 |
| 10 | 30 | 1706 | 6852 | 80.48 | 30.61 | 1.32 |
| 10 | 40 | 2278 | 7194 | 99.66 | 38.24 | 1.55 |

