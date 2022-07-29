#!/usr/bin/env sh
nohup npx json-server --watch data/games.json --port 9000 </dev/null &>/dev/null &