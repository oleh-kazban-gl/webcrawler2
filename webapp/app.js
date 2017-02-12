(function() {
    var urls = [
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author'
    ];

    getData();

    function getData(count) {
        if (!count) {
            count = 0;
        }

        var request = new XMLHttpRequest();

        request.onload = function(event) {
            console.log('readyState: ', request.readyState);
            console.log('responseText: ', request.responseText);
            console.log('request: ', request);
            console.log('finished: ', count);

            callback(count);
        };
        request.onerror = function(event) {
            console.log('readyState: ', request.readyState);
            console.log('responseText: ', request.responseText);
            console.log('request: ', request);
            console.log('finished', count);

            callback(count);
        };

        request.open('GET', urls[count], false);

        try {
            request.send();
        } catch (err) {
            console.error('Error');
            callback(count);
        }

        function callback(count) {
            if (count < urls.length) {
                count++;
                getData(count);
            }
        }
    }
})();