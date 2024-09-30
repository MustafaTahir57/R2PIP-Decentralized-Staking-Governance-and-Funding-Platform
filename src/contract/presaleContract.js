export const presaleAddress = "0x89aFA063d2BE97DbEeFBEE35E2c35A45680dd408";
export const presaleAbi = [
    {
        inputs: [
            { internalType: "address", name: "_R2PIP", type: "address" },
            { internalType: "address", name: "_usdtToken", type: "address" },
            { internalType: "address", name: "_fundReceiver", type: "address" },
            { internalType: "uint256", name: "_bnbRate", type: "uint256" },
            { internalType: "uint256", name: "_usdtRate", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "newReceiver",
                type: "address",
            },
        ],
        name: "FundReceiverUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "isOpen",
                type: "bool",
            },
        ],
        name: "PresaleStatusUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "currency",
                type: "string",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newRate",
                type: "uint256",
            },
        ],
        name: "RateUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "RescueTokens",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "buyer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "bnbSpent",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokensReceived",
                type: "uint256",
            },
        ],
        name: "TokensPurchasedWithBNB",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "buyer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "usdtSpent",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokensReceived",
                type: "uint256",
            },
        ],
        name: "TokensPurchasedWithUSDT",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "by",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "TokensWithdrawn",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "newUSDTAddress",
                type: "address",
            },
        ],
        name: "USDTAddressUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "by",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "USDTWithdrawn",
        type: "event",
    },
    {
        inputs: [],
        name: "R2PIP",
        outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "buyTokensWithBNB",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "usdtAmount", type: "uint256" },
        ],
        name: "buyTokensWithUSDT",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "tokenAmount", type: "uint256" },
        ],
        name: "calculateBNBCost",
        outputs: [
            { internalType: "uint256", name: "bnbCost", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "tokenAmount", type: "uint256" },
        ],
        name: "calculateUSDTCost",
        outputs: [
            { internalType: "uint256", name: "usdtCost", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "fundReceiver",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getRates",
        outputs: [
            { internalType: "uint256", name: "bnb", type: "uint256" },
            { internalType: "uint256", name: "usdt", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getTotalRaised",
        outputs: [
            { internalType: "uint256", name: "totalBNB", type: "uint256" },
            { internalType: "uint256", name: "totalUSD", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "isPresaleOpen",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "tokenAddress", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "rescueTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "bool", name: "_isOpen", type: "bool" }],
        name: "setPresaleOpen",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "totalBNBRaised",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalTokensSold",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalUSDRaised",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_newRate", type: "uint256" },
        ],
        name: "updateBNBRate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_newReceiver", type: "address" },
        ],
        name: "updateFundReceiver",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_newRate", type: "uint256" },
        ],
        name: "updateUSDRate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newUSDTAddress",
                type: "address",
            },
        ],
        name: "updateUSDTAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "usdtToken",
        outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
        name: "withdrawTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
