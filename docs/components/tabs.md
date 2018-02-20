---
title: Tabs
permalink: components/tabs
layout: page
group: Components
toc: true
---
Tabs are mainly used in the dashboard. They embed some information about workflow and status.

### Preview
<ul class="nav nav-tabs w-100 car-dashboard--status--tabs">
    <li class="nav-item">
        <a class="nav-link" href="#"><h5>0</h5><span class="badge badge-primary w-100">To do</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#"><h5>0</h5><span class="badge badge-warning w-100">Needs progress</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#"><h5>0</h5><span class="badge badge-danger w-100">Needs review</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#"><h5>2</h5><span class="badge badge-success w-100">Approved</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link active" href="#"><h5>99</h5><span class="badge badge-secondary w-100">No status</span></a>
    </li>
</ul>


### Code
{% highlight html %}
<ul class="nav nav-tabs w-100 car-dashboard--status--tabs">
    <li class="nav-item">
        <a class="nav-link" href="#"><h5>0</h5><span class="badge badge-primary w-100">To do</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#"><h5>0</h5><span class="badge badge-warning w-100">Needs progress</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#"><h5>0</h5><span class="badge badge-danger w-100">Needs review</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#"><h5>2</h5><span class="badge badge-success w-100">Approved</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link active" href="#"><h5>99</h5><span class="badge badge-secondary w-100">No status</span></a>
    </li>
</ul>
{% endhighlight %}
