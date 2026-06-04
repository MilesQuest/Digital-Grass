const compiledModule = {
    sourceFileName: "source.bas",
    localSymbols: [{"name":"key$","typeSpec":{"type":"string"},"varType":"var","varScope":"local"},{"name":"credits","typeSpec":{"type":"single"},"varType":"var","varScope":"local"},{"name":"fertilizer","typeSpec":{"type":"single"},"varType":"var","varScope":"local"},{"name":"water","typeSpec":{"type":"single"},"varType":"var","varScope":"local"},{"name":"rainbuckets","typeSpec":{"type":"single"},"varType":"var","varScope":"local"},{"name":"waterquantity$","typeSpec":{"type":"string"},"varType":"var","varScope":"local"},{"name":"waterquantity","typeSpec":{"type":"single"},"varType":"var","varScope":"local"},{"name":"fertilizerquantity$","typeSpec":{"type":"string"},"varType":"var","varScope":"local"},{"name":"fertilizerquantity","typeSpec":{"type":"single"},"varType":"var","varScope":"local"},{"name":"bucketquantity$","typeSpec":{"type":"string"},"varType":"var","varScope":"local"},{"name":"bucketquantity","typeSpec":{"type":"single"},"varType":"var","varScope":"local"},{"name":"day","typeSpec":{"type":"single"},"varType":"var","varScope":"local"},{"name":"plantalive","typeSpec":{"type":"single"},"varType":"var","varScope":"local"},{"name":"flower","typeSpec":{"type":"single"},"varType":"var","varScope":"local"},{"name":"wateredyet","typeSpec":{"type":"single"},"varType":"var","varScope":"local"},{"name":"fertilizerneeded","typeSpec":{"type":"single"},"varType":"var","varScope":"local"},{"name":"collectedrain","typeSpec":{"type":"single"},"varType":"var","varScope":"local"},{"name":"musing$","typeSpec":{"type":"string"},"varType":"var","varScope":"local"},{"name":"shopkey$","typeSpec":{"type":"string"},"varType":"var","varScope":"local"}],
    globalSymbols: [],
    stmts: [
        {
            loc: [1, 1],
            async run(ctx) { (await (async () => {
                ctx.tempVars['$1_0'] = ctx.runtime.roundHalfToEven(2);
                ctx.tempVars['$1_1'] = ctx.runtime.roundHalfToEven(0);
                const result = await ctx.runtime.executeBuiltinProc('COLOR', [{"type":"single"},{"type":"single"}], [ctx.tempVars, '$1_0'], [ctx.tempVars, '$1_1']);
                delete ctx.tempVars['$1_0'];
                delete ctx.tempVars['$1_1'];
                return result;
            })()); },
        },
        {
            loc: [2, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "MilesQuest presents Digital Grass!" }, ); },
        },
        {
            loc: [3, 1],
            async run(ctx) { await ctx.runtime.print(null, ); },
        },
        {
            loc: [4, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "You have 100 credits." }, ); },
        },
        {
            loc: [5, 1],
            async run(ctx) { await ctx.runtime.print(null, ); },
        },
        {
            loc: [6, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "One watering can has 5 uses. Watering cans cost 25 credits." }, ); },
        },
        {
            loc: [7, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Water is used once daily to keep grass alive." }, ); },
        },
        {
            loc: [8, 1],
            async run(ctx) { await ctx.runtime.print(null, ); },
        },
        {
            loc: [9, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "One fertilizer bag has 1 use. Fertilizer bags costs 50 credits." }, ); },
        },
        {
            loc: [10, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Fertilizer is used when your grass is unhealthy." }, ); },
        },
        {
            loc: [11, 1],
            async run(ctx) { await ctx.runtime.print(null, ); },
        },
        {
            loc: [12, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "A rain bucket costs 50 credits." }, ); },
        },
        {
            loc: [13, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Rain buckets can collect water daily." }, ); },
        },
        {
            loc: [14, 1],
            async run(ctx) { await ctx.runtime.print(null, ); },
        },
        {
            loc: [15, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Your seeds cost 25 credits. Seeds are a required purchase." }, ); },
        },
        {
            loc: [16, 1],
            async run(ctx) { await ctx.runtime.print(null, ); },
        },
        {
            loc: [17, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Press any key to continue." }, ); },
        },
        {
            loc: [18, 1],
            label: '$2_loopStart',
        },
            {
                loc: [19, 5],
                async run(ctx) { ctx.localVars['key$'] = (await (async () => {
                    const result = await ctx.runtime.executeBuiltinProc('INKEY$', [], );
                    return result;
                })()); },
            },
            {
                loc: [20, 5],
                async run(ctx) { if (!((ctx.localVars['key$'] != ""))) { return { type: 'goto', destLabel: '$3_endif' }; } },
            },
                {
                    loc: [20, 24],
                    async run(ctx) { return { type: 'goto', destLabel: '$2_loopEnd' }; },
                },
            {
                label: '$3_endif',
            },
        {
            loc: [18, 1],
            async run(ctx) { return { type: 'goto', destLabel: '$2_loopStart' }; },
        },
        {
            loc: [18, 1],
            label: '$2_loopEnd',
        },
        {
            loc: [22, 1],
            async run(ctx) { (await (async () => {
                const result = await ctx.runtime.executeBuiltinProc('CLS', [], );
                return result;
            })()); },
        },
        {
            loc: [23, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Seeds purchased!" }, ); },
        },
        {
            loc: [24, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "75 credits remaining." }, ); },
        },
        {
            loc: [25, 1],
            async run(ctx) { ctx.localVars['credits'] = 75; },
        },
        {
            loc: [26, 1],
            async run(ctx) { ctx.localVars['fertilizer'] = 0; },
        },
        {
            loc: [27, 1],
            async run(ctx) { ctx.localVars['water'] = 0; },
        },
        {
            loc: [28, 1],
            async run(ctx) { ctx.localVars['rainbuckets'] = 0; },
        },
        {
            loc: [29, 1],
            async run(ctx) { await ctx.runtime.print(null, ); },
        },
        {
            loc: [31, 1],
            async run(ctx) { const results = await ctx.runtime.input("Shopkeeper: How many watering cans would you like to purchase?", {"type":"string"}); ctx.localVars['waterquantity$'] = results[0];  },
        },
        {
            loc: [32, 1],
            async run(ctx) { ctx.localVars['waterquantity'] = (await (async () => {
                ctx.tempVars['$4_0'] = ctx.localVars['waterquantity$'];
                const result = await ctx.runtime.executeBuiltinProc('VAL', [{"type":"string"}], [ctx.tempVars, '$4_0']);
                delete ctx.tempVars['$4_0'];
                return result;
            })()); },
        },
        {
            loc: [33, 1],
            async run(ctx) { if (!((ctx.localVars['credits'] >= ((ctx.localVars['waterquantity'] * 25))))) { return { type: 'goto', destLabel: '$5_else' }; } },
        },
            {
                loc: [34, 5],
                async run(ctx) { ctx.localVars['credits'] = (ctx.localVars['credits'] - ((ctx.localVars['waterquantity'] * 25))); },
            },
            {
                loc: [35, 5],
                async run(ctx) { ctx.localVars['water'] = (ctx.localVars['water'] + ((ctx.localVars['waterquantity'] * 5))); },
            },
            {
                loc: [36, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Purchase successful!" }, ); },
            },
            {
                loc: [33, 1],
                async run(ctx) { return { type: 'goto', destLabel: '$5_endif' }; },
            },
        {
            loc: [37, 1],
            label: '$5_else',
        },
            {
                loc: [38, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Shopkeeper: You can't afford that." }, ); },
            },
        {
            label: '$5_endif',
        },
        {
            loc: [40, 1],
            async run(ctx) { await ctx.runtime.print(null, ); },
        },
        {
            loc: [43, 1],
            async run(ctx) { const results = await ctx.runtime.input("Shopkeeper: How much fertilizer would you like to purchase?", {"type":"string"}); ctx.localVars['fertilizerquantity$'] = results[0];  },
        },
        {
            loc: [44, 1],
            async run(ctx) { ctx.localVars['fertilizerquantity'] = (await (async () => {
                ctx.tempVars['$6_0'] = ctx.localVars['fertilizerquantity$'];
                const result = await ctx.runtime.executeBuiltinProc('VAL', [{"type":"string"}], [ctx.tempVars, '$6_0']);
                delete ctx.tempVars['$6_0'];
                return result;
            })()); },
        },
        {
            loc: [45, 1],
            async run(ctx) { if (!((ctx.localVars['credits'] >= ((ctx.localVars['fertilizerquantity'] * 50))))) { return { type: 'goto', destLabel: '$7_else' }; } },
        },
            {
                loc: [46, 5],
                async run(ctx) { ctx.localVars['credits'] = (ctx.localVars['credits'] - ((ctx.localVars['fertilizerquantity'] * 50))); },
            },
            {
                loc: [47, 5],
                async run(ctx) { ctx.localVars['fertilizer'] = (ctx.localVars['fertilizer'] + (ctx.localVars['fertilizerquantity'])); },
            },
            {
                loc: [48, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Purchase successful!" }, ); },
            },
            {
                loc: [45, 1],
                async run(ctx) { return { type: 'goto', destLabel: '$7_endif' }; },
            },
        {
            loc: [49, 1],
            label: '$7_else',
        },
            {
                loc: [50, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Shopkeeper: You can't afford that." }, ); },
            },
        {
            label: '$7_endif',
        },
        {
            loc: [52, 1],
            async run(ctx) { await ctx.runtime.print(null, ); },
        },
        {
            loc: [54, 1],
            async run(ctx) { const results = await ctx.runtime.input("Shopkeeper: How many rain buckets would you like to purchase?", {"type":"string"}); ctx.localVars['bucketquantity$'] = results[0];  },
        },
        {
            loc: [55, 1],
            async run(ctx) { ctx.localVars['bucketquantity'] = (await (async () => {
                ctx.tempVars['$8_0'] = ctx.localVars['bucketquantity$'];
                const result = await ctx.runtime.executeBuiltinProc('VAL', [{"type":"string"}], [ctx.tempVars, '$8_0']);
                delete ctx.tempVars['$8_0'];
                return result;
            })()); },
        },
        {
            loc: [56, 1],
            async run(ctx) { if (!((ctx.localVars['credits'] >= ((ctx.localVars['bucketquantity'] * 50))))) { return { type: 'goto', destLabel: '$9_else' }; } },
        },
            {
                loc: [57, 5],
                async run(ctx) { ctx.localVars['credits'] = (ctx.localVars['credits'] - ((ctx.localVars['bucketquantity'] * 50))); },
            },
            {
                loc: [58, 5],
                async run(ctx) { ctx.localVars['rainbuckets'] = (ctx.localVars['rainbuckets'] + (ctx.localVars['bucketquantity'])); },
            },
            {
                loc: [59, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Purchase successful!" }, ); },
            },
            {
                loc: [56, 1],
                async run(ctx) { return { type: 'goto', destLabel: '$9_endif' }; },
            },
        {
            loc: [60, 1],
            label: '$9_else',
        },
            {
                loc: [61, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Shopkeeper: You can't afford that." }, ); },
            },
        {
            label: '$9_endif',
        },
        {
            loc: [63, 1],
            async run(ctx) { await ctx.runtime.print(null, ); },
        },
        {
            loc: [64, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Press any key to continue." }, ); },
        },
        {
            loc: [65, 1],
            label: '$10_loopStart',
        },
            {
                loc: [66, 5],
                async run(ctx) { ctx.localVars['key$'] = (await (async () => {
                    const result = await ctx.runtime.executeBuiltinProc('INKEY$', [], );
                    return result;
                })()); },
            },
            {
                loc: [67, 5],
                async run(ctx) { if (!((ctx.localVars['key$'] != ""))) { return { type: 'goto', destLabel: '$11_endif' }; } },
            },
                {
                    loc: [67, 24],
                    async run(ctx) { return { type: 'goto', destLabel: '$10_loopEnd' }; },
                },
            {
                label: '$11_endif',
            },
        {
            loc: [65, 1],
            async run(ctx) { return { type: 'goto', destLabel: '$10_loopStart' }; },
        },
        {
            loc: [65, 1],
            label: '$10_loopEnd',
        },
        {
            loc: [69, 1],
            async run(ctx) { (await (async () => {
                const result = await ctx.runtime.executeBuiltinProc('CLS', [], );
                return result;
            })()); },
        },
        {
            loc: [70, 1],
            async run(ctx) { (await (async () => {
                ctx.tempVars['$12_0'] = (await (async () => {
                    const result = await ctx.runtime.executeBuiltinProc('TIMER', [], );
                    return result;
                })());
                const result = await ctx.runtime.executeBuiltinProc('RANDOMIZE', [{"type":"long"}], [ctx.tempVars, '$12_0']);
                delete ctx.tempVars['$12_0'];
                return result;
            })()); },
        },
        {
            loc: [71, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Inventory:" }, ); },
        },
        {
            loc: [72, 1],
            async run(ctx) { await ctx.runtime.print(null, ); },
        },
        {
            loc: [73, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Watering Cans: " }, { type: 'semicolon' }, { type: 'value', value: ((ctx.localVars['water'] / 5)) }, { type: 'semicolon' }, { type: 'value', value: " (you can use it " }, { type: 'semicolon' }, { type: 'value', value: (ctx.localVars['water']) }, { type: 'semicolon' }, { type: 'value', value: " times.)" }, ); },
        },
        {
            loc: [74, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Fertilizer Bags: " }, { type: 'semicolon' }, { type: 'value', value: ctx.localVars['fertilizer'] }, { type: 'semicolon' }, { type: 'value', value: " (you can use it " }, { type: 'semicolon' }, { type: 'value', value: (ctx.localVars['fertilizer']) }, { type: 'semicolon' }, { type: 'value', value: " times.)" }, ); },
        },
        {
            loc: [75, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Rain Buckets: " }, { type: 'semicolon' }, { type: 'value', value: ctx.localVars['rainbuckets'] }, { type: 'semicolon' }, { type: 'value', value: " (gives you " }, { type: 'semicolon' }, { type: 'value', value: ctx.localVars['rainbuckets'] }, { type: 'semicolon' }, { type: 'value', value: " water when collected.)" }, ); },
        },
        {
            loc: [76, 1],
            async run(ctx) { await ctx.runtime.print(null, ); },
        },
        {
            loc: [77, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Credits Remaining: " }, { type: 'semicolon' }, { type: 'value', value: ctx.localVars['credits'] }, ); },
        },
        {
            loc: [78, 1],
            async run(ctx) { await ctx.runtime.print(null, ); },
        },
        {
            loc: [79, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "+1 Receipt" }, ); },
        },
        {
            loc: [80, 1],
            async run(ctx) { await ctx.runtime.print(null, ); },
        },
        {
            loc: [81, 1],
            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Press any key to begin Day 1" }, ); },
        },
        {
            loc: [82, 1],
            label: '$13_loopStart',
        },
            {
                loc: [83, 5],
                async run(ctx) { ctx.localVars['key$'] = (await (async () => {
                    const result = await ctx.runtime.executeBuiltinProc('INKEY$', [], );
                    return result;
                })()); },
            },
            {
                loc: [84, 5],
                async run(ctx) { if (!((ctx.localVars['key$'] != ""))) { return { type: 'goto', destLabel: '$14_endif' }; } },
            },
                {
                    loc: [84, 24],
                    async run(ctx) { return { type: 'goto', destLabel: '$13_loopEnd' }; },
                },
            {
                label: '$14_endif',
            },
        {
            loc: [82, 1],
            async run(ctx) { return { type: 'goto', destLabel: '$13_loopStart' }; },
        },
        {
            loc: [82, 1],
            label: '$13_loopEnd',
        },
        {
            loc: [86, 1],
            async run(ctx) { (await (async () => {
                const result = await ctx.runtime.executeBuiltinProc('CLS', [], );
                return result;
            })()); },
        },
        {
            loc: [88, 1],
            async run(ctx) { ctx.localVars['day'] = 1; },
        },
        {
            loc: [89, 1],
            async run(ctx) { ctx.localVars['plantalive'] = 1; },
        },
        {
            loc: [90, 1],
            async run(ctx) { ctx.localVars['flower'] = 0; },
        },
        {
            loc: [91, 1],
            async run(ctx) { ctx.localVars['wateredyet'] = 0; },
        },
        {
            loc: [92, 1],
            async run(ctx) { ctx.localVars['fertilizerneeded'] = 0; },
        },
        {
            loc: [93, 1],
            async run(ctx) { ctx.localVars['collectedrain'] = 0; },
        },
        {
            loc: [95, 1],
            label: '$15_loopStart',
        },
        {
            loc: [95, 1],
            async run(ctx) { if (!(((ctx.localVars['day'] <= 35) && (ctx.localVars['plantalive'] === 1)))) { return { type: 'goto', destLabel: '$15_loopEnd' }; } },
        },
            {
                loc: [97, 5],
                async run(ctx) { ctx.tempVars['$16_test'] = (await (async () => {
                    ctx.tempVars['$17_0'] = ((await (async () => {
                        const result = await ctx.runtime.executeBuiltinProc('RND', [], );
                        return result;
                    })()) * 15);
                    const result = await ctx.runtime.executeBuiltinProc('INT', [{"type":"double"}], [ctx.tempVars, '$17_0']);
                    delete ctx.tempVars['$17_0'];
                    return result;
                })()); },
            },
            {
                loc: [98, 9],
                async run(ctx) { if (!(ctx.tempVars['$16_test'] === 0)) { return { type: 'goto', destLabel: '$16_elif1' }; } },
            },
                {
                    loc: [98, 17],
                    async run(ctx) { ctx.localVars['musing$'] = "A rabbit hops along happily."; },
                },
                {
                    loc: [98, 9],
                    async run(ctx) { return { type: 'goto', destLabel: '$16_endif' }; },
                },
            {
                loc: [99, 9],
                label: '$16_elif1',
            },
            {
                loc: [99, 9],
                async run(ctx) { if (!(ctx.tempVars['$16_test'] === 1)) { return { type: 'goto', destLabel: '$16_elif2' }; } },
            },
                {
                    loc: [99, 17],
                    async run(ctx) { ctx.localVars['musing$'] = "Your grass is vibing."; },
                },
                {
                    loc: [99, 9],
                    async run(ctx) { return { type: 'goto', destLabel: '$16_endif' }; },
                },
            {
                loc: [100, 9],
                label: '$16_elif2',
            },
            {
                loc: [100, 9],
                async run(ctx) { if (!(ctx.tempVars['$16_test'] === 2)) { return { type: 'goto', destLabel: '$16_elif3' }; } },
            },
                {
                    loc: [100, 17],
                    async run(ctx) { ctx.localVars['musing$'] = "The garden gnome in the corner may or may not be possessed."; },
                },
                {
                    loc: [100, 9],
                    async run(ctx) { return { type: 'goto', destLabel: '$16_endif' }; },
                },
            {
                loc: [101, 9],
                label: '$16_elif3',
            },
            {
                loc: [101, 9],
                async run(ctx) { if (!(ctx.tempVars['$16_test'] === 3)) { return { type: 'goto', destLabel: '$16_elif4' }; } },
            },
                {
                    loc: [101, 17],
                    async run(ctx) { ctx.localVars['musing$'] = "Birds are chirping."; },
                },
                {
                    loc: [101, 9],
                    async run(ctx) { return { type: 'goto', destLabel: '$16_endif' }; },
                },
            {
                loc: [102, 9],
                label: '$16_elif4',
            },
            {
                loc: [102, 9],
                async run(ctx) { if (!(ctx.tempVars['$16_test'] === 4)) { return { type: 'goto', destLabel: '$16_elif5' }; } },
            },
                {
                    loc: [102, 17],
                    async run(ctx) { ctx.localVars['musing$'] = "A gentle breeze rolls through."; },
                },
                {
                    loc: [102, 9],
                    async run(ctx) { return { type: 'goto', destLabel: '$16_endif' }; },
                },
            {
                loc: [103, 9],
                label: '$16_elif5',
            },
            {
                loc: [103, 9],
                async run(ctx) { if (!(ctx.tempVars['$16_test'] === 5)) { return { type: 'goto', destLabel: '$16_elif6' }; } },
            },
                {
                    loc: [103, 17],
                    async run(ctx) { ctx.localVars['musing$'] = "Your grass has grown a dandelion, and you make a wish."; },
                },
                {
                    loc: [103, 9],
                    async run(ctx) { return { type: 'goto', destLabel: '$16_endif' }; },
                },
            {
                loc: [104, 9],
                label: '$16_elif6',
            },
            {
                loc: [104, 9],
                async run(ctx) { if (!(ctx.tempVars['$16_test'] === 6)) { return { type: 'goto', destLabel: '$16_elif7' }; } },
            },
                {
                    loc: [104, 17],
                    async run(ctx) { ctx.localVars['musing$'] = "Your grass appears to be warning you about something..."; },
                },
                {
                    loc: [104, 9],
                    async run(ctx) { return { type: 'goto', destLabel: '$16_endif' }; },
                },
            {
                loc: [105, 9],
                label: '$16_elif7',
            },
            {
                loc: [105, 9],
                async run(ctx) { if (!(ctx.tempVars['$16_test'] === 7)) { return { type: 'goto', destLabel: '$16_elif8' }; } },
            },
                {
                    loc: [105, 17],
                    async run(ctx) { ctx.localVars['musing$'] = "A beautiful butterfly flies by."; },
                },
                {
                    loc: [105, 9],
                    async run(ctx) { return { type: 'goto', destLabel: '$16_endif' }; },
                },
            {
                loc: [106, 9],
                label: '$16_elif8',
            },
            {
                loc: [106, 9],
                async run(ctx) { if (!(ctx.tempVars['$16_test'] === 8)) { return { type: 'goto', destLabel: '$16_elif9' }; } },
            },
                {
                    loc: [106, 17],
                    async run(ctx) { ctx.localVars['musing$'] = "A cloud shaped like a cloud rolls by."; },
                },
                {
                    loc: [106, 9],
                    async run(ctx) { return { type: 'goto', destLabel: '$16_endif' }; },
                },
            {
                loc: [107, 9],
                label: '$16_elif9',
            },
            {
                loc: [107, 9],
                async run(ctx) { if (!(ctx.tempVars['$16_test'] === 9)) { return { type: 'goto', destLabel: '$16_elif10' }; } },
            },
                {
                    loc: [107, 17],
                    async run(ctx) { ctx.localVars['musing$'] = "A funny piece of meta-commentary appears on your screen."; },
                },
                {
                    loc: [107, 9],
                    async run(ctx) { return { type: 'goto', destLabel: '$16_endif' }; },
                },
            {
                loc: [109, 9],
                label: '$16_elif10',
            },
            {
                loc: [109, 9],
                async run(ctx) { if (!(ctx.tempVars['$16_test'] === 10)) { return { type: 'goto', destLabel: '$16_elif11' }; } },
            },
                {
                    loc: [110, 13],
                    async run(ctx) { ctx.localVars['musing$'] = "There isn't any rain today."; },
                },
                {
                    loc: [111, 13],
                    async run(ctx) { ctx.localVars['collectedrain'] = 1; },
                },
                {
                    loc: [109, 9],
                    async run(ctx) { return { type: 'goto', destLabel: '$16_endif' }; },
                },
            {
                loc: [112, 9],
                label: '$16_elif11',
            },
            {
                loc: [112, 9],
                async run(ctx) { if (!(ctx.tempVars['$16_test'] === 11)) { return { type: 'goto', destLabel: '$16_elif12' }; } },
            },
                {
                    loc: [113, 13],
                    async run(ctx) { ctx.localVars['musing$'] = "The skies are clear today, no rain."; },
                },
                {
                    loc: [114, 13],
                    async run(ctx) { ctx.localVars['collectedrain'] = 1; },
                },
                {
                    loc: [112, 9],
                    async run(ctx) { return { type: 'goto', destLabel: '$16_endif' }; },
                },
            {
                loc: [115, 9],
                label: '$16_elif12',
            },
            {
                loc: [115, 9],
                async run(ctx) { if (!(ctx.tempVars['$16_test'] === 12)) { return { type: 'goto', destLabel: '$16_elif13' }; } },
            },
                {
                    loc: [116, 13],
                    async run(ctx) { ctx.localVars['musing$'] = "Your grass is looking unhealthy. Fertilizer might be needed."; },
                },
                {
                    loc: [117, 13],
                    async run(ctx) { ctx.localVars['fertilizerneeded'] = 1; },
                },
                {
                    loc: [115, 9],
                    async run(ctx) { return { type: 'goto', destLabel: '$16_endif' }; },
                },
            {
                loc: [118, 9],
                label: '$16_elif13',
            },
            {
                loc: [118, 9],
                async run(ctx) { if (!(ctx.tempVars['$16_test'] === 13)) { return { type: 'goto', destLabel: '$16_elif14' }; } },
            },
                {
                    loc: [119, 13],
                    async run(ctx) { ctx.localVars['musing$'] = "Your grass grew extra flowers today!"; },
                },
                {
                    loc: [120, 13],
                    async run(ctx) { ctx.localVars['flower'] = (ctx.localVars['flower'] + 10); },
                },
                {
                    loc: [118, 9],
                    async run(ctx) { return { type: 'goto', destLabel: '$16_endif' }; },
                },
            {
                loc: [121, 9],
                label: '$16_elif14',
            },
            {
                loc: [121, 9],
                async run(ctx) { if (!(ctx.tempVars['$16_test'] === 14)) { return { type: 'goto', destLabel: '$16_endif' }; } },
            },
                {
                    loc: [122, 13],
                    async run(ctx) { ctx.localVars['musing$'] = "It rained hard last night, so you don't have to water your grass today."; },
                },
                {
                    loc: [123, 13],
                    async run(ctx) { ctx.localVars['wateredyet'] = 1; },
                },
            {
                label: '$16_endif',
            },
            {
                loc: [97, 5],
                async run(ctx) { delete ctx.tempVars['$16_test']; },
            },
            {
                loc: [125, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Day " }, { type: 'semicolon' }, { type: 'value', value: ctx.localVars['day'] }, ); },
            },
            {
                loc: [126, 5],
                async run(ctx) { await ctx.runtime.print(null, ); },
            },
            {
                loc: [127, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: ctx.localVars['musing$'] }, ); },
            },
            {
                loc: [128, 5],
                async run(ctx) { await ctx.runtime.print(null, ); },
            },
            {
                loc: [129, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "You have " }, { type: 'semicolon' }, { type: 'value', value: ctx.localVars['credits'] }, { type: 'semicolon' }, { type: 'value', value: " credits. " }, ); },
            },
            {
                loc: [130, 5],
                async run(ctx) { await ctx.runtime.print(null, ); },
            },
            {
                loc: [131, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "You have " }, { type: 'semicolon' }, { type: 'value', value: ctx.localVars['water'] }, { type: 'semicolon' }, { type: 'value', value: " water uses. " }, ); },
            },
            {
                loc: [132, 5],
                async run(ctx) { await ctx.runtime.print(null, ); },
            },
            {
                loc: [133, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "You have " }, { type: 'semicolon' }, { type: 'value', value: ctx.localVars['fertilizer'] }, { type: 'semicolon' }, { type: 'value', value: " fertilizer bags. " }, ); },
            },
            {
                loc: [134, 5],
                async run(ctx) { await ctx.runtime.print(null, ); },
            },
            {
                loc: [135, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "you have " }, { type: 'semicolon' }, { type: 'value', value: ctx.localVars['rainbuckets'] }, { type: 'semicolon' }, { type: 'value', value: " rainbuckets. " }, ); },
            },
            {
                loc: [136, 5],
                async run(ctx) { await ctx.runtime.print(null, ); },
            },
            {
                loc: [137, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Your grass has " }, { type: 'semicolon' }, { type: 'value', value: ctx.localVars['flower'] }, { type: 'semicolon' }, { type: 'value', value: " flowers." }, ); },
            },
            {
                loc: [138, 5],
                async run(ctx) { await ctx.runtime.print(null, ); },
            },
            {
                loc: [139, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "-Press 1 to water your grass." }, ); },
            },
            {
                loc: [140, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "-Press 2 to collect rain from your bucket." }, ); },
            },
            {
                loc: [141, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "-Press 3 to fertilize your grass." }, ); },
            },
            {
                loc: [142, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "-Press 4 to sell your flowers." }, ); },
            },
            {
                loc: [143, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "-Press 5 to enter shop." }, ); },
            },
            {
                loc: [144, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "-Press 6 to load next day." }, ); },
            },
            {
                loc: [146, 5],
                label: '$18_loopStart',
            },
                {
                    loc: [147, 5],
                    async run(ctx) { ctx.localVars['key$'] = (await (async () => {
                        const result = await ctx.runtime.executeBuiltinProc('INKEY$', [], );
                        return result;
                    })()); },
                },
                {
                    loc: [148, 5],
                    async run(ctx) { if (!((ctx.localVars['key$'] === "1"))) { return { type: 'goto', destLabel: '$19_endif' }; } },
                },
                    {
                        loc: [149, 9],
                        async run(ctx) { if (!((ctx.localVars['water'] <= 0))) { return { type: 'goto', destLabel: '$20_else' }; } },
                    },
                        {
                            loc: [150, 13],
                            async run(ctx) { await ctx.runtime.print(null, ); },
                        },
                        {
                            loc: [151, 13],
                            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "You are out of water." }, ); },
                        },
                        {
                            loc: [149, 9],
                            async run(ctx) { return { type: 'goto', destLabel: '$20_endif' }; },
                        },
                    {
                        loc: [152, 9],
                        label: '$20_else',
                    },
                        {
                            loc: [153, 13],
                            async run(ctx) { ctx.localVars['water'] = (ctx.localVars['water'] - 1); },
                        },
                        {
                            loc: [154, 13],
                            async run(ctx) { ctx.localVars['wateredyet'] = 1; },
                        },
                        {
                            loc: [155, 13],
                            async run(ctx) { await ctx.runtime.print(null, ); },
                        },
                        {
                            loc: [156, 13],
                            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "You water your grass." }, ); },
                        },
                    {
                        label: '$20_endif',
                    },
                {
                    label: '$19_endif',
                },
                {
                    loc: [159, 5],
                    async run(ctx) { if (!((ctx.localVars['key$'] === "2"))) { return { type: 'goto', destLabel: '$21_endif' }; } },
                },
                    {
                        loc: [160, 9],
                        async run(ctx) { if (!((ctx.localVars['rainbuckets'] <= 0))) { return { type: 'goto', destLabel: '$22_elif1' }; } },
                    },
                        {
                            loc: [161, 13],
                            async run(ctx) { await ctx.runtime.print(null, ); },
                        },
                        {
                            loc: [162, 13],
                            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "You don't have a rain bucket." }, ); },
                        },
                        {
                            loc: [160, 9],
                            async run(ctx) { return { type: 'goto', destLabel: '$22_endif' }; },
                        },
                    {
                        loc: [163, 9],
                        label: '$22_elif1',
                    },
                    {
                        loc: [163, 9],
                        async run(ctx) { if (!((ctx.localVars['collectedrain'] === 1))) { return { type: 'goto', destLabel: '$22_else' }; } },
                    },
                        {
                            loc: [164, 13],
                            async run(ctx) { await ctx.runtime.print(null, ); },
                        },
                        {
                            loc: [165, 13],
                            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "There isn't any rain to collect!" }, ); },
                        },
                        {
                            loc: [163, 9],
                            async run(ctx) { return { type: 'goto', destLabel: '$22_endif' }; },
                        },
                    {
                        loc: [166, 9],
                        label: '$22_else',
                    },
                        {
                            loc: [167, 13],
                            async run(ctx) { ctx.localVars['water'] = (ctx.localVars['water'] + ctx.localVars['rainbuckets']); },
                        },
                        {
                            loc: [168, 13],
                            async run(ctx) { ctx.localVars['collectedrain'] = 1; },
                        },
                        {
                            loc: [169, 13],
                            async run(ctx) { await ctx.runtime.print(null, ); },
                        },
                        {
                            loc: [170, 13],
                            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "You collect " }, { type: 'semicolon' }, { type: 'value', value: ctx.localVars['rainbuckets'] }, { type: 'semicolon' }, { type: 'value', value: " water from your rain bucket(s)." }, ); },
                        },
                    {
                        label: '$22_endif',
                    },
                {
                    label: '$21_endif',
                },
                {
                    loc: [173, 5],
                    async run(ctx) { if (!((ctx.localVars['key$'] === "3"))) { return { type: 'goto', destLabel: '$23_endif' }; } },
                },
                    {
                        loc: [174, 9],
                        async run(ctx) { if (!((ctx.localVars['fertilizer'] <= 0))) { return { type: 'goto', destLabel: '$24_else' }; } },
                    },
                        {
                            loc: [175, 13],
                            async run(ctx) { await ctx.runtime.print(null, ); },
                        },
                        {
                            loc: [176, 13],
                            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "You do not have any fertilizer." }, ); },
                        },
                        {
                            loc: [174, 9],
                            async run(ctx) { return { type: 'goto', destLabel: '$24_endif' }; },
                        },
                    {
                        loc: [177, 9],
                        label: '$24_else',
                    },
                        {
                            loc: [178, 13],
                            async run(ctx) { ctx.localVars['fertilizer'] = (ctx.localVars['fertilizer'] - 1); },
                        },
                        {
                            loc: [179, 13],
                            async run(ctx) { ctx.localVars['fertilizerneeded'] = 0; },
                        },
                        {
                            loc: [180, 13],
                            async run(ctx) { await ctx.runtime.print(null, ); },
                        },
                        {
                            loc: [181, 13],
                            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "You apply fertilizer to your grass." }, ); },
                        },
                    {
                        label: '$24_endif',
                    },
                {
                    label: '$23_endif',
                },
                {
                    loc: [184, 5],
                    async run(ctx) { if (!((ctx.localVars['key$'] === "4"))) { return { type: 'goto', destLabel: '$25_endif' }; } },
                },
                    {
                        loc: [185, 9],
                        async run(ctx) { if (!((ctx.localVars['flower'] <= 0))) { return { type: 'goto', destLabel: '$26_else' }; } },
                    },
                        {
                            loc: [186, 13],
                            async run(ctx) { await ctx.runtime.print(null, ); },
                        },
                        {
                            loc: [187, 13],
                            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "...You don't have any flowers to sell." }, ); },
                        },
                        {
                            loc: [185, 9],
                            async run(ctx) { return { type: 'goto', destLabel: '$26_endif' }; },
                        },
                    {
                        loc: [188, 9],
                        label: '$26_else',
                    },
                        {
                            loc: [189, 13],
                            async run(ctx) { ctx.localVars['credits'] = (ctx.localVars['credits'] + ((ctx.localVars['flower'] * 5))); },
                        },
                        {
                            loc: [190, 13],
                            async run(ctx) { await ctx.runtime.print(null, ); },
                        },
                        {
                            loc: [191, 13],
                            async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "You collect and sell the flowers for" }, { type: 'semicolon' }, { type: 'value', value: (ctx.localVars['flower'] * 5) }, { type: 'semicolon' }, { type: 'value', value: " credits." }, ); },
                        },
                        {
                            loc: [192, 13],
                            async run(ctx) { ctx.localVars['flower'] = 0; },
                        },
                    {
                        label: '$26_endif',
                    },
                {
                    label: '$25_endif',
                },
                {
                    loc: [195, 5],
                    async run(ctx) { if (!((ctx.localVars['key$'] === "5"))) { return { type: 'goto', destLabel: '$27_endif' }; } },
                },
                    {
                        loc: [196, 9],
                        async run(ctx) { (await (async () => {
                            const result = await ctx.runtime.executeBuiltinProc('CLS', [], );
                            return result;
                        })()); },
                    },
                    {
                        loc: [197, 9],
                        async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Shopkeeper: Hi there! What can I do for you?" }, ); },
                    },
                    {
                        loc: [198, 9],
                        async run(ctx) { await ctx.runtime.print(null, ); },
                    },
                    {
                        loc: [199, 9],
                        async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "-Press 1 to purchase a watering can. (25 credits)" }, ); },
                    },
                    {
                        loc: [200, 9],
                        async run(ctx) { await ctx.runtime.print(null, ); },
                    },
                    {
                        loc: [201, 9],
                        async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "-Press 2 to purchase fertilizer. (50 credits)" }, ); },
                    },
                    {
                        loc: [202, 9],
                        async run(ctx) { await ctx.runtime.print(null, ); },
                    },
                    {
                        loc: [203, 9],
                        async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "-Press 3 to purchase a rain bucket. (50 credits)" }, ); },
                    },
                    {
                        loc: [204, 9],
                        async run(ctx) { await ctx.runtime.print(null, ); },
                    },
                    {
                        loc: [205, 9],
                        async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "-Press 4 to leave shop." }, ); },
                    },
                    {
                        loc: [206, 9],
                        label: '$28_loopStart',
                    },
                        {
                            loc: [207, 13],
                            async run(ctx) { ctx.localVars['shopkey$'] = (await (async () => {
                                const result = await ctx.runtime.executeBuiltinProc('INKEY$', [], );
                                return result;
                            })()); },
                        },
                        {
                            loc: [208, 13],
                            async run(ctx) { if (!((ctx.localVars['shopkey$'] === "1"))) { return { type: 'goto', destLabel: '$29_endif' }; } },
                        },
                            {
                                loc: [209, 17],
                                async run(ctx) { if (!((ctx.localVars['credits'] >= 25))) { return { type: 'goto', destLabel: '$30_else' }; } },
                            },
                                {
                                    loc: [210, 21],
                                    async run(ctx) { ctx.localVars['credits'] = (ctx.localVars['credits'] - 25); },
                                },
                                {
                                    loc: [211, 21],
                                    async run(ctx) { ctx.localVars['water'] = (ctx.localVars['water'] + 5); },
                                },
                                {
                                    loc: [212, 21],
                                    async run(ctx) { await ctx.runtime.print(null, ); },
                                },
                                {
                                    loc: [213, 21],
                                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Purchase successful!" }, ); },
                                },
                                {
                                    loc: [209, 17],
                                    async run(ctx) { return { type: 'goto', destLabel: '$30_endif' }; },
                                },
                            {
                                loc: [214, 17],
                                label: '$30_else',
                            },
                                {
                                    loc: [215, 21],
                                    async run(ctx) { await ctx.runtime.print(null, ); },
                                },
                                {
                                    loc: [216, 21],
                                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Shopkeeper: You can't afford that." }, ); },
                                },
                            {
                                label: '$30_endif',
                            },
                        {
                            label: '$29_endif',
                        },
                        {
                            loc: [219, 13],
                            async run(ctx) { if (!((ctx.localVars['shopkey$'] === "2"))) { return { type: 'goto', destLabel: '$31_endif' }; } },
                        },
                            {
                                loc: [220, 17],
                                async run(ctx) { if (!((ctx.localVars['credits'] >= 50))) { return { type: 'goto', destLabel: '$32_else' }; } },
                            },
                                {
                                    loc: [221, 21],
                                    async run(ctx) { ctx.localVars['credits'] = (ctx.localVars['credits'] - 50); },
                                },
                                {
                                    loc: [222, 21],
                                    async run(ctx) { ctx.localVars['fertilizer'] = (ctx.localVars['fertilizer'] + 1); },
                                },
                                {
                                    loc: [223, 21],
                                    async run(ctx) { await ctx.runtime.print(null, ); },
                                },
                                {
                                    loc: [224, 21],
                                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Purchase successful!" }, ); },
                                },
                                {
                                    loc: [220, 17],
                                    async run(ctx) { return { type: 'goto', destLabel: '$32_endif' }; },
                                },
                            {
                                loc: [225, 17],
                                label: '$32_else',
                            },
                                {
                                    loc: [226, 21],
                                    async run(ctx) { await ctx.runtime.print(null, ); },
                                },
                                {
                                    loc: [227, 21],
                                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Shopkeeper: You can't afford that." }, ); },
                                },
                            {
                                label: '$32_endif',
                            },
                        {
                            label: '$31_endif',
                        },
                        {
                            loc: [230, 13],
                            async run(ctx) { if (!((ctx.localVars['shopkey$'] === "3"))) { return { type: 'goto', destLabel: '$33_endif' }; } },
                        },
                            {
                                loc: [231, 17],
                                async run(ctx) { if (!((ctx.localVars['credits'] >= 50))) { return { type: 'goto', destLabel: '$34_else' }; } },
                            },
                                {
                                    loc: [232, 21],
                                    async run(ctx) { ctx.localVars['credits'] = (ctx.localVars['credits'] - 50); },
                                },
                                {
                                    loc: [233, 21],
                                    async run(ctx) { ctx.localVars['rainbuckets'] = (ctx.localVars['rainbuckets'] + 1); },
                                },
                                {
                                    loc: [234, 21],
                                    async run(ctx) { await ctx.runtime.print(null, ); },
                                },
                                {
                                    loc: [235, 21],
                                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Purchase successful!" }, ); },
                                },
                                {
                                    loc: [231, 17],
                                    async run(ctx) { return { type: 'goto', destLabel: '$34_endif' }; },
                                },
                            {
                                loc: [236, 17],
                                label: '$34_else',
                            },
                                {
                                    loc: [237, 21],
                                    async run(ctx) { await ctx.runtime.print(null, ); },
                                },
                                {
                                    loc: [238, 21],
                                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Shopkeeper: You can't afford that." }, ); },
                                },
                            {
                                label: '$34_endif',
                            },
                        {
                            label: '$33_endif',
                        },
                    {
                        loc: [206, 9],
                        async run(ctx) { if ((ctx.localVars['shopkey$'] === "4")) { return { type: 'goto', destLabel: '$28_loopEnd' }; } },
                    },
                    {
                        loc: [206, 9],
                        async run(ctx) { return { type: 'goto', destLabel: '$28_loopStart' }; },
                    },
                    {
                        loc: [206, 9],
                        label: '$28_loopEnd',
                    },
                    {
                        loc: [242, 9],
                        async run(ctx) { (await (async () => {
                            const result = await ctx.runtime.executeBuiltinProc('CLS', [], );
                            return result;
                        })()); },
                    },
                    {
                        loc: [243, 9],
                        async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Inventory:" }, ); },
                    },
                    {
                        loc: [244, 9],
                        async run(ctx) { await ctx.runtime.print(null, ); },
                    },
                    {
                        loc: [245, 9],
                        async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Watering Cans: " }, { type: 'semicolon' }, { type: 'value', value: ((ctx.localVars['water'] / 5)) }, { type: 'semicolon' }, { type: 'value', value: " (you can use it " }, { type: 'semicolon' }, { type: 'value', value: (ctx.localVars['water']) }, { type: 'semicolon' }, { type: 'value', value: " times.)" }, ); },
                    },
                    {
                        loc: [246, 9],
                        async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Fertilizer Bags: " }, { type: 'semicolon' }, { type: 'value', value: ctx.localVars['fertilizer'] }, { type: 'semicolon' }, { type: 'value', value: " (you can use it " }, { type: 'semicolon' }, { type: 'value', value: (ctx.localVars['fertilizer']) }, { type: 'semicolon' }, { type: 'value', value: " times.)" }, ); },
                    },
                    {
                        loc: [247, 9],
                        async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Rain Buckets: " }, { type: 'semicolon' }, { type: 'value', value: ctx.localVars['rainbuckets'] }, { type: 'semicolon' }, { type: 'value', value: " (Can collect water daily.)" }, ); },
                    },
                    {
                        loc: [248, 9],
                        async run(ctx) { await ctx.runtime.print(null, ); },
                    },
                    {
                        loc: [249, 9],
                        async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Credits Remaining: " }, { type: 'semicolon' }, { type: 'value', value: ctx.localVars['credits'] }, ); },
                    },
                    {
                        loc: [250, 9],
                        async run(ctx) { await ctx.runtime.print(null, ); },
                    },
                    {
                        loc: [251, 9],
                        async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Press any key to continue." }, ); },
                    },
                    {
                        loc: [252, 9],
                        label: '$35_loopStart',
                    },
                        {
                            loc: [253, 13],
                            async run(ctx) { ctx.localVars['shopkey$'] = (await (async () => {
                                const result = await ctx.runtime.executeBuiltinProc('INKEY$', [], );
                                return result;
                            })()); },
                        },
                    {
                        loc: [252, 9],
                        async run(ctx) { if ((ctx.localVars['shopkey$'] != "")) { return { type: 'goto', destLabel: '$35_loopEnd' }; } },
                    },
                    {
                        loc: [252, 9],
                        async run(ctx) { return { type: 'goto', destLabel: '$35_loopStart' }; },
                    },
                    {
                        loc: [252, 9],
                        label: '$35_loopEnd',
                    },
                {
                    label: '$27_endif',
                },
            {
                loc: [146, 5],
                async run(ctx) { if ((ctx.localVars['key$'] === "6")) { return { type: 'goto', destLabel: '$18_loopEnd' }; } },
            },
            {
                loc: [146, 5],
                async run(ctx) { return { type: 'goto', destLabel: '$18_loopStart' }; },
            },
            {
                loc: [146, 5],
                label: '$18_loopEnd',
            },
            {
                loc: [257, 9],
                async run(ctx) { if (!(((ctx.localVars['wateredyet'] === 0) || (ctx.localVars['fertilizerneeded'] === 1)))) { return { type: 'goto', destLabel: '$36_endif' }; } },
            },
                {
                    loc: [258, 13],
                    async run(ctx) { (await (async () => {
                        const result = await ctx.runtime.executeBuiltinProc('CLS', [], );
                        return result;
                    })()); },
                },
                {
                    loc: [259, 13],
                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Day " }, { type: 'semicolon' }, { type: 'value', value: ctx.localVars['day'] }, ); },
                },
                {
                    loc: [260, 13],
                    async run(ctx) { await ctx.runtime.print(null, ); },
                },
                {
                    loc: [261, 13],
                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Your plant wilted. Game Over." }, ); },
                },
                {
                    loc: [262, 13],
                    async run(ctx) { await ctx.runtime.print(null, ); },
                },
                {
                    loc: [263, 13],
                    async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Press any key to quit." }, ); },
                },
                {
                    loc: [264, 13],
                    label: '$37_loopStart',
                },
                    {
                        loc: [265, 17],
                        async run(ctx) { ctx.localVars['key$'] = (await (async () => {
                            const result = await ctx.runtime.executeBuiltinProc('INKEY$', [], );
                            return result;
                        })()); },
                    },
                {
                    loc: [264, 13],
                    async run(ctx) { if ((ctx.localVars['key$'] != "")) { return { type: 'goto', destLabel: '$37_loopEnd' }; } },
                },
                {
                    loc: [264, 13],
                    async run(ctx) { return { type: 'goto', destLabel: '$37_loopStart' }; },
                },
                {
                    loc: [264, 13],
                    label: '$37_loopEnd',
                },
                {
                    loc: [267, 25],
                    async run(ctx) { ctx.localVars['plantalive'] = 0; },
                },
            {
                label: '$36_endif',
            },
            {
                loc: [269, 9],
                async run(ctx) { (await (async () => {
                    const result = await ctx.runtime.executeBuiltinProc('CLS', [], );
                    return result;
                })()); },
            },
            {
                loc: [270, 9],
                async run(ctx) { ctx.localVars['day'] = (ctx.localVars['day'] + 1); },
            },
            {
                loc: [271, 9],
                async run(ctx) { ctx.localVars['wateredyet'] = 0; },
            },
            {
                loc: [272, 9],
                async run(ctx) { ctx.localVars['collectedrain'] = 0; },
            },
            {
                loc: [273, 9],
                async run(ctx) { ctx.localVars['flower'] = (ctx.localVars['flower'] + (await (async () => {
                    ctx.tempVars['$38_0'] = ((await (async () => {
                        const result = await ctx.runtime.executeBuiltinProc('RND', [], );
                        return result;
                    })()) * 6);
                    const result = await ctx.runtime.executeBuiltinProc('INT', [{"type":"double"}], [ctx.tempVars, '$38_0']);
                    delete ctx.tempVars['$38_0'];
                    return result;
                })())); },
            },
        {
            loc: [95, 1],
            async run(ctx) { return { type: 'goto', destLabel: '$15_loopStart' }; },
        },
        {
            loc: [95, 1],
            label: '$15_loopEnd',
        },
        {
            loc: [276, 1],
            async run(ctx) { if (!((ctx.localVars['day'] > 35))) { return { type: 'goto', destLabel: '$39_endif' }; } },
        },
            {
                loc: [277, 1],
                async run(ctx) { (await (async () => {
                    const result = await ctx.runtime.executeBuiltinProc('CLS', [], );
                    return result;
                })()); },
            },
            {
                loc: [278, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "They said you needed to touch grass." }, ); },
            },
            {
                loc: [279, 5],
                async run(ctx) { await ctx.runtime.print(null, ); },
            },
            {
                loc: [280, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "But you wouldn't listen." }, ); },
            },
            {
                loc: [281, 5],
                async run(ctx) { await ctx.runtime.print(null, ); },
            },
            {
                loc: [282, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "You toiled endlessly..." }, ); },
            },
            {
                loc: [283, 5],
                async run(ctx) { await ctx.runtime.print(null, ); },
            },
            {
                loc: [284, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "And you proved them wrong." }, ); },
            },
            {
                loc: [285, 5],
                async run(ctx) { await ctx.runtime.print(null, ); },
            },
            {
                loc: [286, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Because you touched DIGITAL GRASS!" }, ); },
            },
            {
                loc: [287, 5],
                async run(ctx) { await ctx.runtime.print(null, ); },
            },
            {
                loc: [288, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Thanks for playing my game. I had a lot of fun coding it, and hopefully you enjoyed playing it." }, ); },
            },
            {
                loc: [289, 5],
                async run(ctx) { await ctx.runtime.print(null, ); },
            },
            {
                loc: [290, 5],
                async run(ctx) { await ctx.runtime.print(null, { type: 'value', value: "Game Over. You Win!!!" }, ); },
            },
        {
            label: '$39_endif',
        },
    ],
    procs: [
    ],
};
module.exports = compiledModule;
