@extends('layouts.app')

@section('content')
<div class="py-4 container">
    <div id="main-card" shopId={{ $shops[0]->id }} name={{$shops[0]->name}} products={{$shops[0]->product}}></div>
</div>
<div class="pb-4 container">
    <div id="second-card" shopId1={{ $shops[0]->id }} shop1={{ $shops[0]->name }} product1={{$shops[0]->product}} ></div>
</div>
@endsection
