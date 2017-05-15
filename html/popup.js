window.onload = function() {

    document.getElementById('buttona').addEventListener('click', function() {

        var urls = '';
        var textarea = document.getElementById('url-list');

        chrome.windows.getAll({
            populate: true
        }, function(windows) {
            windows.forEach(function(window) {
                window.tabs.forEach(function(tab) {
                    //collect all of the urls here, I will just log them instead
                    urls += (tab.url + '\n\n');
                });
            });
            // Set the value of the textarea returned from getTabUrls().
            textarea.value = urls;
            // Select all of the text in the textarea.
            textarea.select();
            // Copy the text selected to the clipboard.
            document.execCommand('copy', false, null);

            // Clear out the value just in case.
            textarea.value = '';
        });

        alert('copied!');
    });


    document.getElementById('buttonc').addEventListener('click', function() {

        var urls = '';
        var textarea = document.getElementById('url-list');
        var input = document.getElementById('hi').value;

        chrome.windows.getAll({
            populate: true
        }, function(windows) {
            windows.forEach(function(window) {
                window.tabs.forEach(function(tab) {
                    //collect all of the urls here, I will just log them instead

                    if ((tab.title).includes(input)){ 

			urls += (tab.url + '\n\n'); 

		    }
                });
            });
            // Set the value of the textarea returned from getTabUrls().
            textarea.value = urls;
            // Select all of the text in the textarea.
            textarea.select();
            // Copy the text selected to the clipboard.
            document.execCommand('copy', false, null);

            // Clear out the value just in case.
            textarea.value = '';
        });

        alert('copied!' + input);
    });


    document.getElementById('button').addEventListener('click', function() {

        var urls = '';
        var textarea = document.getElementById('url-list');
        chrome.tabs.getAllInWindow(null, function(tabList) {
            // Loop through tabs and get urls for each.
            for (var tab in tabList) {
                urls += (tabList[tab].url + '\n\n');
            }
            // Set the value of the textarea returned from getTabUrls().
            textarea.value = urls;
            // Select all of the text in the textarea.
            textarea.select();
            // Copy the text selected to the clipboard.
            document.execCommand('copy', false, null);

            // Clear out the value just in case.
            textarea.value = '';
        });

        alert('copied!');
    });
}
