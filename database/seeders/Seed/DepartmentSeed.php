<?php

namespace Database\Seeders\Seed;

use App\Models\Department;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        DB::table('departments')->insert([
//            ['id'=>'']
//        ]);
        Department::factory(8)->create();
    }
}
