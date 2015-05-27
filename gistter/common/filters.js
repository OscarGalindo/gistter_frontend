(function () {
    'use strict';

    angular
        .module('gistter')
        .filter('linkify', linkify);

    linkify.$inject = ['$state', '$sce'];

    function linkify($state, $sce) {
        return function(body, hashtags) {
            angular.forEach(hashtags, function(tag) {
                var href = '<a href="' + $state.href('tag', {tag: tag.replace('#', '')}) + '">' + tag + '</a>';
                body = body.replace(tag, href);
            });
            return $sce.trustAsHtml(body);
        }
    }

})();
