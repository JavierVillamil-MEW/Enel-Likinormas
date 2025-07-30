<?php

        /**
         * GIT DEPLOYMENT SCRIPT
         *
         * Used for automatically deploying websites via github or bitbucket, more deets here:
         *
         *              https://gist.github.com/1809044
         */
        // The commands
        
        $commands = array(
                'echo $PWD',
                'whoami',
                'git branch -a',
		'git stash',
		'git -c http.sslVerify=false pull origin develop',
                'git status',
                //'git submodule sync',
                //'git submodule update',
                //'git submodule status',
                'git log -1 --oneline',
                'cd ..;composer install',
		'git stash drop',
        );
// Run the commands for output
        $output = '';
        foreach($commands AS $command){
                // Run it
                $tmp = shell_exec('( cd .. ; '.$command.' 2>&1 )');
                // Output
                $output .= "<span style=\"color: #6BE234;\">\$</span> <span style=\"color: #729FCF;\">{$command}\n</span>";
                $output .= htmlentities(trim($tmp)) . "\n";
                                }
        // Make it pretty for manual user access (and why not?)
?>
        <!DOCTYPE HTML>
        <html lang="en-US">
        <head>
                <meta charset="UTF-8">
                <title>GIT DEPLOYMENT SCRIPT - CDI</title>
        </head>
        <body style="background-color: #000000; color: #FFFFFF; font-weight: bold; padding: 0 10px;">
        <pre>
   .  ____  .   <span style="color: #FF0000;">          _ _ </span><span style="color: #F2F5A9;">               _           _                      </span>
   |/      \|   <span style="color: #FF0000;">         | (_)</span><span style="color: #F2F5A9;">     __       (_)         | |                      </span>
  [|  <span style="color: #FF0000;">&hearts;  &hearts;</span>  |]  <span style="color: #FF0000;">   ___ __| |_ </span><span style="color: #F2F5A9;">    /  \  _ __ _  __ _  __| |_ __  __ _  ___ __ _  </span>
   |___==___|   <span style="color: #FF0000;">  / __/ _` | |</span>__<span style="color: #F2F5A9;"> / /\ \| / _| |/ _` |/ _` | `  \/ _` |/ __/ _` | </span>
                <span style="color: #FF0000;"> | (_| (_| | |</span>__<span style="color: #F2F5A9;">/  __  |  / | | (_) | (_) |    | (_) | (_| (_| | </span>
                <span style="color: #FF0000;">  \___\__,_|_|</span><span style="color: #F2F5A9;"> /__/  \_|_|  |_|\__,_|\__,_|_|\_|\__,_|\___\__, | </span>
                <span style="color: #F2F5A9;">                                                            _| | </span>
                <span style="color: #F2F5A9;">                                                           |___/ </span>

<?php echo $output; ?>

