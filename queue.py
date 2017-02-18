s,f,t = map(int, raw_input().strip().split(' '))
n = int(raw_input())
l = map(int, raw_input().strip().split(' '))


times = []
for i,x in enumerate(l):
    if i == 0:
        start_time = max(s, x)
        end_time = start_time + t
        times.append(start_time, end_time, x)
    else:
        if x > end_time:
            start_time = x
            end_time = start_time + t
            times.append(start_time, end_time, x)
        else:
            start_time = end_time
            end_time = start_time + t
            times.append(start_time, end_time, x)

    if end_time > f:
         break




for i, (start_time, end_time, came_time) in enumerate(times):
    if i == 0:
        
    else:
        if start_time > prev_end_time:
            print prev_end_time
            exit(0)
        else:
            


    prev_end_time = end_time
    prev_came_time = came_time