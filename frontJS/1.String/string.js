"use strict";
    console.clear();

    (w => {
        // Yor code here ...
        function dscount(str,s1,s2) {
            var podStr = s1 + s2, // Итоговая подстрока для поиска
                r = 0, // Наш результат
                pos = 0; // Начальная позиция поиска

            while (true) {
                var foundPos = str.indexOf(podStr, pos); // Ищем позицию подстроки в строке
                
                if (foundPos == -1) break; // Если не нашли -> вышли

                r++; // Если нашли, результат +1, позицию запомнили
                pos = foundPos + 1;
            } 

            return r;
        }
        // ... //


        // Для удобства можно использовать эти тесты:
        try {
            test(dscount, ['ab___ab__', 'a', 'b'], 2);
            test(dscount, ['___cd____', 'c', 'd'], 1);
            test(dscount, ['de_______', 'd', 'e'], 1);
            test(dscount, ['12_12__12', '1', '2'], 3);
            test(dscount, ['_ba______', 'a', 'b'], 0);
            test(dscount, ['_a__b____', 'a', 'b'], 0);
            test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);

            console.info("Congratulations! All tests success passed.");
        } catch(e) {
            console.error(e);
        }

        // Простая функция тестирования
        function test(call, args, count, n) {
            let r = (call.apply(n, args) === count);
            console.assert(r, `Finded items count: ${count}`);
            if (!r) throw "Test failed!";
        }

        return '--- End ---';
    })(window);