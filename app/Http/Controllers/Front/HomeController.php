<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $departments = Department::all()->toArray();
        return inertia('Front/Home/Index', compact('departments'));
    }
}
